import { Product, getAllProduct } from '@/db/models/products';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const search = searchParams.get('search') as string;
		const skip = searchParams.get('skip') as string;
		const limit = searchParams.get('limit') as string;
		console.log(search, limit, skip, '>>> query search');

		const products: Product[] = await getAllProduct(
			search,
			Number(skip),
			Number(limit)
		);
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
