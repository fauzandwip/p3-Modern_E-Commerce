import Card from './Card';

const CardList = () => {
	return (
		<div className="flex flex-col w-full min-h-screen bg-zinc-950 px-16 py-8 gap-20">
			<div className="grid grid-cols-3 gap-4 ">
				<div className="col-span-1 w-full h-[70vh]">
					<Card />
				</div>
				<div className="col-span-2 w-full h-[70vh]">
					<Card />
				</div>
				<div className="col-span-2 w-full h-[70vh]">
					<Card position={'justify-between bg-gradient-to-b'} />
				</div>
				<div className="col-span-1 w-full h-[70vh]">
					<Card position={'justify-between bg-gradient-to-b'} />
				</div>
			</div>

			<div className="grid grid-cols-2 h-screen gap-4 py-6">
				<div className="w-full">
					<Card />
				</div>
				<div className="w-full">
					<Card />
				</div>
				{/* <div className="w-full">
					<Card />
				</div> */}
			</div>

			<div className="w-full h-[80vh] ">
				<div className="w-full h-full">
					<Card position={'center'} />
				</div>
			</div>
		</div>
	);
};

export default CardList;
