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
	// console.log(data.thumbnail);
	// console.log(`bg-[url('${data?.thumbnail ?? ''}')]`);

	// https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=cover,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/a701a722e980747af20c8fe67f94370116c7cd19-750x1200.jpg
	// https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=3200,width=1536,trim=266;0;267;0/https://cdn.sanity.io/images/5gii1snx/production/58717b85213e0cbf8f8b1663204eeb6bb2b60c5c-1600x1600.png
	// https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/2bff446bc5a5b2770836f239421af736bde1e54c-8736x11648.jpg
	const [buttonShow, setButtonShow] = useState(false);
	const router = useRouter();

	const onAddWishlist = async (e: MouseEvent) => {
		console.log('add wishlist');
		e.stopPropagation();

		const response = await fetch(
			`http://localhost:3000/api/wishlist/${data?._id}`,
			{
				method: 'POST',
			}
		);
		console.log(await response.json());
	};

	const onRemoveWishlist = async (e: MouseEvent) => {
		console.log('delete wishlist');
		e.stopPropagation();
		const response = await fetch(
			`http://localhost:3000/api/wishlist/${wishlistId}`,
			{
				method: 'DELETE',
			}
		);

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
