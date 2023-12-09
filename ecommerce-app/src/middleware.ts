import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { readPayloadJose } from './lib/jwt';

export const middleware = async (req: NextRequest) => {
	console.log(req.url, '>>> from middleware');

	const url = req.url;

	if (url.includes('/api/products') || url.includes('/api/wishlist')) {
		console.log('>>> middleware inside');

		const authorization = cookies().get('Authorization');

		if (!authorization) {
			return NextResponse.json(
				{
					message: 'Unauthenticated',
				},
				{
					status: 401,
				}
			);
		}

		const token = authorization.value.replace('Bearer ', '');
		const decodedUser = await readPayloadJose<{ _id: string; email: string }>(
			token
		);

		// console.log(decodedUser, 'decodeddd');

		const reqHeaders = new Headers(req.headers);
		reqHeaders.set('x-user-id', decodedUser._id);
		reqHeaders.set('x-user-email', decodedUser.email);

		const response = NextResponse.next({
			request: {
				headers: reqHeaders,
			},
		});

		return response;
	}

	return NextResponse.next();
};

export const config = {
	matcher: ['/api/:path*'],
	// matcher: ['/api/products/:path*', '/api/wishlist/:path*'],
};
