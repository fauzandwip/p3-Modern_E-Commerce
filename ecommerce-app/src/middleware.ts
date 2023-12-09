import { NextRequest } from 'next/server';

export const middleware = (req: NextRequest) => {
	console.log(req.url, '>>> from middleware');
};

export const config = {
	matcher: ['/api/:path*'],
	// matcher: ['api/products/:path*', 'api/wishlist/:path*'],
};
