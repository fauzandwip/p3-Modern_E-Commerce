'use client';

import ButtonWishlist from '@/components/ButtonWishlist';
import { Product } from '@/db/models/products';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { MouseEvent } from 'react';
// import { useState } from 'react';

const DetailProduct = ({ product }: { product: Product }) => {
	// const [primaryImage, setPrimaryImage] = useState('');

	const onAddWishlist = async (e: MouseEvent) => {
		console.log('add wishlist');
		e.stopPropagation();

		const response = await fetch(
			`http://localhost:3000/api/wishlist/${product?._id}`,
			{
				method: 'POST',
			}
		);
		console.log(await response.json());
	};

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
									width={100}
									height={100}
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
				<button
					onClick={onAddWishlist}
					className="w-full py-4 text-slate-900 bg-slate-100 text-sm font-medium rounded-lg mt-20"
				>
					Add To Wishlist
				</button>
			</div>
		</div>
	);
};

export default DetailProduct;
