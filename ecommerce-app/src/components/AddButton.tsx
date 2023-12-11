'use client';

import { Product } from '@/db/models/products';
import { MouseEvent } from 'react';
import { toast } from 'react-toastify';

const AddButton = ({ product }: { product: Product }) => {
	const onAddWishlist = async (e: MouseEvent) => {
		console.log('add wishlist');
		e.stopPropagation();

		const response = await fetch(`/api/wishlist/${product?._id}`, {
			method: 'POST',
		});
		// console.log(await response.json());
		const { message } = await response.json();

		if (message === 'Unauthenticated') {
			toast.error('Log In First');
		} else {
			toast.success(message);
		}
	};

	return (
		<button
			onClick={onAddWishlist}
			className="w-full py-4 text-slate-900 bg-slate-100 text-sm font-medium rounded-lg mt-20"
		>
			Add To Wishlist
		</button>
	);
};

export default AddButton;
