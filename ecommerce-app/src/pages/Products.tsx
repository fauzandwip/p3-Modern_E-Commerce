import InfiniteCustom from '@/components/InfiniteCustom';
import SearchBar from '@/components/SearchBar';
import { cookies } from 'next/headers';

const getAllProduct = async (search?: string, limit?: string) => {
	const products = await fetch(
		process.env.BASE_URL +
			`/api/products?limit=${limit ?? 8}&skip=0&search=${search ? search : ''}`,
		{
			cache: 'no-cache',
			headers: {
				Cookie: cookies().toString(),
			},
		}
	);
	return await products.json();
};

const Products = async ({ search }: { search: string }) => {
	const products = await getAllProduct(search);
	// console.log(search, '>>> search');

	console.log(products?.data.length, '>>> products');

	return (
		<div className="w-full min-h-screen bg-zinc-950 flex flex-col gap-10 justify-start items-start py-10 px-16 pt-24">
			<div className="w-full flex justify-center">
				<div className="w-1/2">
					<SearchBar />
				</div>
			</div>
			<div className="w-full">
				<InfiniteCustom products={products?.data} search={search} />
			</div>
		</div>
	);
};

export default Products;
