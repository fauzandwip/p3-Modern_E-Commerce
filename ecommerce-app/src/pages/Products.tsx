import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';
import { Product } from '@/db/models/products';
import { cookies } from 'next/headers';

const getAllProduct = async (search: string) => {
	const products = await fetch(
		process.env.BASE_URL + `/api/products?search=${search ? search : ''}`,
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
	// console.log(products, '>>> products component');
	console.log(search, '>>> search');

	return (
		<div className="w-full min-h-screen h-full bg-zinc-950 flex flex-col gap-10 justify-start items-start py-10 px-16 pt-24">
			<div className="w-full flex justify-center">
				<div className="w-1/2">
					<SearchBar />
				</div>
			</div>
			<div className="w-full grid grid-cols-4 justify-start gap-x-6 gap-y-8 py-10">
				{products?.data?.map((data: Product) => {
					return (
						<div key={data._id.toString()} className=" aspect-[1/1.3]">
							<Card action="add" data={data} />
						</div>
					);
				})}
			</div>
			{/* <div className="w-full flex justify-center p-5">
				<Pagination />
			</div> */}
		</div>
	);
};

export default Products;
