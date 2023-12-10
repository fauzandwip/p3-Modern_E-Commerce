import { WishlistModel, getWishlists } from '@/db/models/wishlist';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	try {
		console.log('>>> GET wishlist');

		const userId = req.headers.get('x-user-id') as string;
		console.log(userId, 'userId wishlist');

		const wishlist: WishlistModel[] = await getWishlists(userId);
		// console.log(wishlist, '>>> wishlist route');

		return NextResponse.json(
			{
				message: 'Wishlist',
				data: wishlist,
			},
			{
				status: 200,
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
