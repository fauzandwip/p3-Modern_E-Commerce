'use client';

import { Product } from '@/db/models/products';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import { ProductDummy } from './CardList';
import { isLogin } from '@/action/auth';
import { toast } from 'react-toastify';

type Props = {
	position?: string;
	data: ProductDummy;
};

const CardCustom = ({
	position = 'justify-end bg-gradient-to-t',
	data,
}: Props) => {
	const router = useRouter();

	const onAddWishlist = async (e: MouseEvent) => {
		console.log('add wishlist');
		e.stopPropagation();

		if (!isLogin()) return router.push('/login');
		const response = await fetch(`/api/wishlist/${data?._id.toString()}`, {
			method: 'POST',
		});

		const { message } = await response.json();

		if (message === 'Unauthenticated') {
			toast.error('Log In First');
		} else {
			toast.success(message);
		}
	};

	return (
		<div
			onClick={() => router.push(`/products/${data?.slug}`)}
			className={`relative flex flex-col w-full h-full flex-1 rounded-xl bg-center cursor-pointer bg-cover`}
		>
			<img
				src={data?.thumbnail}
				className="w-full h-full absolute rounded-xl"
			/>
			<div
				className={`from-zinc-950/80 from-0% to-50% flex flex-col w-full h-full p-8 rounded-xl z-10 ${
					position === 'center'
						? 'items-center justify-between bg-gradient-to-b'
						: position
				}`}
			>
				<div>
					<h1
						className={`text-slate-100 text-2xl font-extrabold tracking-tight ${
							position === 'center' ? 'text-center' : ''
						}`}
					>
						{data?.name.toUpperCase()}
					</h1>
					<p className=" text-zinc-400">{data?.excerpt}</p>
				</div>
				<button
					onClick={onAddWishlist}
					className="px-8 py-4 bg-slate-100 text-slate-950 w-max rounded-lg text-sm font-medium mt-4"
				>
					Add to wishlist
				</button>
			</div>
		</div>
	);
};

export default CardCustom;
