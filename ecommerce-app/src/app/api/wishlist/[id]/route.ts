import { Product, getProductById } from '@/db/models/products';
import {
	WishlistModel,
	addWishlist,
	deleteWishlist,
	getWishlist,
} from '@/db/models/wishlist';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
	req: Request,
	{ params }: { params: { id: string } }
) {
	try {
		console.log(params, '>>> params POST add wishlist');
		const { id: productId } = params;
		// console.log(productId, '>>> productId wishlist');
		const product: Product = await getProductById(productId);

		if (!product) {
			return NextResponse.json(
				{
					message: 'Product not found',
				},
				{
					status: 404,
				}
			);
		}

		const userId = req.headers.get('x-user-id') as string;
		// console.log(req.headers, 'userId wishlist');
		// console.log(userId, 'userId wishlist');

		await addWishlist({ productId, userId });

		return NextResponse.json(
			{
				message: 'Success add to wishlist',
			},
			{
				status: 201,
			}
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: 'Internal Server Error',
			},
			{
				status: 500,
			}
		);
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } }
) {
	try {
		console.log(params, '>>> params DELETE wishlist');
		const { id } = params;
		console.log(id, '>>> id delete wishlist');

		const userId = req.headers.get('x-user-id') as string;
		// console.log(userId, 'userId wishlist');

		await deleteWishlist(id);

		return NextResponse.json(
			{
				message: 'Success to delete wishlist',
			},
			{
				status: 201,
			}
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: 'Internal Server Error',
			},
			{
				status: 500,
			}
		);
	}
}
