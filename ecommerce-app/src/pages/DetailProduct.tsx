import Image from 'next/image';
// import { useState } from 'react';

const DetailProduct = () => {
	// const [primaryImage, setPrimaryImage] = useState('');

	return (
		<div className="flex flex-row w-full h-screen pt-28 gap-20 pb-10 px-10">
			<div className="w-8/12 h-full flex gap-10 px-10">
				<Image
					src={
						'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/2bff446bc5a5b2770836f239421af736bde1e54c-8736x11648.jpg'
					}
					alt="Product Image"
					width={1000}
					height={1000}
					className="rounded-xl"
				/>
			</div>
			<div className="w-4/12 flex flex-col justify-center">
				<div>
					<h1 className=" text-3xl mb-2 font-extrabold">KEYBOARD GAMING</h1>
					<h3 className="">$109.99</h3>
					<div className=" h-[1px] bg-gray-500 opacity-50 my-4" />
					<div className="grid grid-cols-5 gap-2 h-24 my-8">
						<Image
							src={
								'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/2bff446bc5a5b2770836f239421af736bde1e54c-8736x11648.jpg'
							}
							alt="Product Image"
							width={100}
							height={100}
							className="w-full h-24 rounded-md"
						/>
						<Image
							src={
								'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/2bff446bc5a5b2770836f239421af736bde1e54c-8736x11648.jpg'
							}
							alt="Product Image"
							width={100}
							height={100}
							className="w-full h-24 rounded-md"
						/>
						<Image
							src={
								'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/2bff446bc5a5b2770836f239421af736bde1e54c-8736x11648.jpg'
							}
							alt="Product Image"
							width={100}
							height={100}
							className="w-full h-24 rounded-md"
						/>
						<Image
							src={
								'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/2bff446bc5a5b2770836f239421af736bde1e54c-8736x11648.jpg'
							}
							alt="Product Image"
							width={100}
							height={100}
							className="w-full h-24 rounded-md"
						/>
						<Image
							src={
								'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/2bff446bc5a5b2770836f239421af736bde1e54c-8736x11648.jpg'
							}
							alt="Product Image"
							width={100}
							height={100}
							className="w-full h-24 rounded-md"
						/>
					</div>
					<div className=" h-[1px] bg-gray-500 opacity-50 my-4" />
					<p className="my-4">Thorax saepe deficio adimpleo conitor.</p>
					<h1 className="text-lg font-bold mb-2">Description</h1>
					<p className="text-sm leading-6">
						Ciminatio velociter spero voro demoror vetus voluptas alter copia.
						Timor coniecto damno comptus usus crinis crebro tametsi. Summisse
						decumbo virtus calculus vomito utroque bibo aufero aro.
						Adinventitias apto aestas annus deduco capio vehemens. Delibero
						deporto placeat voluptatibus aeternus deficio. Vis super voluptate
						autem amicitia capillus vinitor suasoria sufficio deduco.
					</p>
				</div>
				<button className="w-full py-4 text-slate-900 bg-slate-100 text-sm font-medium rounded-lg mt-20">
					Add To Wishlist
				</button>
			</div>
		</div>
	);
};

export default DetailProduct;
