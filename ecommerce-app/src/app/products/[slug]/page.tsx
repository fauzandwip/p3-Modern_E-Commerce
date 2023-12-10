import { Product } from '@/db/models/products';
import DetailProduct from '@/pages/DetailProduct';
import { cookies } from 'next/headers';

const getDetailProduct = async (slug: string): Promise<Product> => {
	const response = await fetch(process.env.BASE_URL + '/api/products/' + slug, {
		method: 'GET',
		headers: {
			Cookie: cookies().toString(),
		},
	});

	// console.log(await response.json(), '>>> response detail product');
	const { data } = await response.json();
	return data;
};

const DetailProductPage = async ({ params }: { params: { slug: string } }) => {
	const product: Product = await getDetailProduct(params?.slug);

	return <DetailProduct product={product} />;
};

export default DetailProductPage;
