import Card from '@/components/Card';
import { WishlistModel } from '@/db/models/wishlist';
import { cookies } from 'next/headers';

const getWishlist = async () => {
	console.log('GET wishlist component');

	const response = await fetch(process.env.BASE_URL + '/api/wishlist', {
		method: 'GET',
		headers: {
			Cookie: cookies().toString(),
		},
	});
	return await response.json();
};

const WishlistPage = async () => {
	const wishlist = await getWishlist();
	// console.log(wishlist, 'wishlist component');

	return (
		<div className="w-full min-h-screen h-full bg-zinc-950 flex flex-col gap-10 justify-start items-start py-10 px-16 pt-24">
			<div>
				<h1 className="text-4xl font-extrabold">Wishlist</h1>
			</div>
			<div className="w-full grid grid-cols-4 justify-start gap-x-6 gap-y-8">
				{wishlist?.data?.map((data: WishlistModel) => {
					return (
						<div key={data?._id.toString()} className=" aspect-[1/1.3]">
							<Card
								action="remove"
								data={data?.product}
								wishlistId={data?._id.toString()}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WishlistPage;
