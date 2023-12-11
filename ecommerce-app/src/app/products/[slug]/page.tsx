import { Product } from '@/db/models/products';
import DetailProduct from '@/pages/DetailProduct';
import { Metadata, ResolvingMetadata } from 'next';
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

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const slug = params.slug;

	// fetch data
	const product = await getDetailProduct(slug);

	// optionally access and extend (rather than replace) parent metadata
	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			images: [product.thumbnail, ...previousImages],
		},
	};
}

const DetailProductPage = async ({ params }: { params: { slug: string } }) => {
	const product: Product = await getDetailProduct(params?.slug);

	return <DetailProduct product={product} />;
};

export default DetailProductPage;
