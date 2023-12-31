import AddButton from '@/components/AddButton';
import { Product } from '@/db/models/products';
import { Metadata, ResolvingMetadata } from 'next';
import { cookies } from 'next/headers';
import Image from 'next/image';

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

	return (
		<div className="flex flex-row w-full h-screen pt-28 gap-20 pb-10 px-14">
			<div className="w-7/12 h-full flex gap-10">
				<Image
					src={product?.thumbnail}
					alt="Product Image"
					width={1000}
					height={1000}
					className="rounded-xl"
				/>
			</div>
			<div className="w-5/12 flex flex-col justify-center">
				<div>
					<h1 className=" text-3xl mb-2 font-extrabold">
						{product?.name.toUpperCase()}
					</h1>
					<h3 className="">${product?.price}</h3>
					<div className=" h-[1px] bg-gray-500 opacity-50 my-4" />
					<div className="grid grid-cols-5 gap-2 h-24 my-8">
						{product?.images.map((imageUrl: string, i: number) => {
							return (
								<Image
									key={i}
									src={imageUrl}
									alt="Product Image"
									width={200}
									height={200}
									className="w-full h-24 rounded-md"
								/>
							);
						})}
					</div>
					<div className=" h-[1px] bg-gray-500 opacity-50 my-4" />
					<p className="my-4">{product?.excerpt}</p>
					<h1 className="text-lg font-bold mb-2">Description</h1>
					<p className="text-sm leading-6">{product?.description}</p>
				</div>
				<AddButton product={product} />
			</div>
		</div>
	);
};

export default DetailProductPage;
