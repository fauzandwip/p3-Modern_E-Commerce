'use client';

import { MouseEvent, useState } from 'react';
import ButtonWishlist from './ButtonWishlist';
import { Product } from '@/db/models/products';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {
	action: 'remove' | 'add';
	data: Product;
	wishlistId?: string;
};

const Card = ({ action, data, wishlistId }: Props) => {
	const [buttonShow, setButtonShow] = useState(false);
	const router = useRouter();

	const onAddWishlist = async (e: MouseEvent) => {
		console.log('add wishlist');
		e.stopPropagation();

		const response = await fetch(`/api/wishlist/${data?._id}`, {
			method: 'POST',
		});
		console.log(await response.json());
	};

	const onRemoveWishlist = async (e: MouseEvent) => {
		console.log('delete wishlist');
		e.stopPropagation();
		const response = await fetch(`/api/wishlist/${wishlistId}`, {
			method: 'DELETE',
		});

		console.log(await response.json(), 'DELETE WISHLIST handler');
		router.refresh();
	};

	return (
		<div
			onClick={() => router.push(`/products/${data?.slug}`)}
			className="w-full h-full flex flex-col cursor-pointer"
		>
			<div
				onMouseOver={() => setButtonShow(true)}
				onMouseLeave={() => setButtonShow(false)}
				className={`relative rounded-md w-full h-5/6 p-4 flex flex-col justify-end items-center bg-cover bg-center`}
			>
				<Image
					src={data?.thumbnail}
					alt="Product Image"
					width={400}
					height={400}
					className="w-full h-full rounded-md top-0 left-0 absolute"
				/>
				<ButtonWishlist
					show={buttonShow}
					text={action === 'add' ? 'Add to Wishlist' : 'Remove'}
					onClick={action === 'add' ? onAddWishlist : onRemoveWishlist}
				/>
			</div>
			<div
				className={`flex-1 from-zinc-950/80 from-0% to-50% flex flex-col w-full pt-2`}
			>
				<div>
					<h1 className={`text-slate-100 font-medium`}>{data.name}</h1>
					<p className="text-[12px] text-zinc-400">{data.excerpt}</p>
					<p className="text-sm mt-2 text-slate-100">${data.price}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
