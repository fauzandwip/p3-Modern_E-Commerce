'use client';

import { Product } from '@/db/models/products';
import Card from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';

type Props = {
	products: Product[];
	search: string;
};

const InfiniteCustom = ({ products, search }: Props) => {
	const [moreProducts, setMoreProducts] = useState<Product[]>(products);
	const [hasMore, setHasMore] = useState<boolean>(true);

	const getMoreProducts = async () => {
		const response = await fetch(
			`/api/products?limit=2&skip=${moreProducts.length}&search=${
				search ? search : ''
			}`,
			{
				cache: 'no-cache',
			}
		);
		console.log('moreeeee');

		const products = await response.json();
		// console.log(products);
		if (!products?.data.length) setHasMore(false);

		setMoreProducts([...moreProducts, ...products?.data]);
	};

	useEffect(() => {
		setMoreProducts(products);
		setHasMore(true);
	}, [products]);

	console.log(products, 'infinite trigger');
	console.log(moreProducts, ' more infinite trigger');

	return (
		<InfiniteScroll
			dataLength={moreProducts.length}
			next={getMoreProducts}
			hasMore={hasMore}
			loader={<h4>Loading...</h4>}
			endMessage={
				<p className="w-full col-span-4 pt-10 flex justify-center items-start">
					<b className="text-xl">All products have been displayed</b>
				</p>
			}
			className="w-full grid grid-cols-4 justify-start gap-x-6 gap-y-8 py-10"
		>
			{moreProducts.map((data: Product, index: number) => {
				return (
					<div key={index} className=" aspect-[1/1.3]">
						<Card action="add" data={data} />
					</div>
				);
			})}
		</InfiniteScroll>
	);
};

export default InfiniteCustom;
