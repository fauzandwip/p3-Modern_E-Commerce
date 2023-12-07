import Card from '@/components/Card';

const Wishlist = () => {
	const arr = [];
	for (let i = 0; i < 19; i++) {
		arr.push(i);
	}

	return (
		<div className="w-full h-full bg-zinc-950 flex flex-col gap-10 justify-start items-start py-10 px-16">
			<div>
				<h1 className="text-4xl font-extrabold">Wishlist</h1>
			</div>
			<div className="w-full grid grid-cols-4 justify-start gap-x-6 gap-y-8">
				{arr.map((_, i) => {
					return (
						<div key={i} className=" aspect-[1/1.5]">
							<Card />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Wishlist;
