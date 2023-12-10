import { Product, getAllProduct, getProductBySlug } from '@/db/models/products';
import { NextResponse } from 'next/server';

export async function GET(
	req: Request,
	{ params }: { params: { slug: string } }
) {
	try {
		const { slug } = params;
		const product: Product = await getProductBySlug(slug);
		console.log('>>> GET product by slug tigerr');

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

		return NextResponse.json({
			message: 'Get Product Detail',
			data: product,
		});
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
