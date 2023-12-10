type Props = {
	position?: string;
};

const CardCustom = ({ position = 'justify-end bg-gradient-to-t' }: Props) => {
	// https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=cover,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/a701a722e980747af20c8fe67f94370116c7cd19-750x1200.jpg
	// https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=3200,width=1536,trim=266;0;267;0/https://cdn.sanity.io/images/5gii1snx/production/58717b85213e0cbf8f8b1663204eeb6bb2b60c5c-1600x1600.png
	// https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/2bff446bc5a5b2770836f239421af736bde1e54c-8736x11648.jpg
	return (
		<div
			className={`flex flex-col w-full h-full flex-1 rounded-xl bg-center bg-[url('https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/2bff446bc5a5b2770836f239421af736bde1e54c-8736x11648.jpg')] bg-cover`}
		>
			<div
				className={`from-zinc-950/80 from-0% to-50% flex flex-col w-full h-full p-8 rounded-xl ${
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
						KEYBOARD GAMING
					</h1>
					<p className=" text-zinc-400">
						Thorax saepe deficio adimpleo conitor.
					</p>
					{/* <p className="text-sm mt-2">$109.99</p> */}
				</div>
				<button className="px-8 py-4 bg-slate-100 text-slate-950 w-max rounded-lg text-sm font-medium mt-4">
					Add to wishlist
				</button>
			</div>
		</div>
	);
};

export default CardCustom;
