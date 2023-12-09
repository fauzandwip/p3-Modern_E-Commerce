import { Product, getAllProduct } from '@/db/models/products';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const products: Product[] = await getAllProduct();
		console.log('>>> GET products tigerr');

		return NextResponse.json({
			message: 'Get All Product',
			data: products,
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
