'use client';

import { useState } from 'react';
import ButtonWishlist from './ButtonWishlist';

type Props = {
	textBtn: string;
};

const Card = ({ textBtn }: Props) => {
	// https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=cover,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/a701a722e980747af20c8fe67f94370116c7cd19-750x1200.jpg
	// https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=3200,width=1536,trim=266;0;267;0/https://cdn.sanity.io/images/5gii1snx/production/58717b85213e0cbf8f8b1663204eeb6bb2b60c5c-1600x1600.png
	// https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/2bff446bc5a5b2770836f239421af736bde1e54c-8736x11648.jpg
	const [buttonShow, setButtonShow] = useState(false);

	return (
		<div className="w-full h-full flex flex-col">
			<div
				onMouseOver={() => setButtonShow(true)}
				onMouseLeave={() => setButtonShow(false)}
				className="rounded-md w-full h-5/6 p-4 flex flex-col justify-end items-center bg-[url('https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/2bff446bc5a5b2770836f239421af736bde1e54c-8736x11648.jpg')] bg-cover bg-center"
			>
				<ButtonWishlist show={buttonShow} text={textBtn} />
			</div>
			<div
				className={`flex-1 from-zinc-950/80 from-0% to-50% flex flex-col w-full rounded-xl h-1/6 pt-2`}
			>
				<div>
					<h1 className={`text-slate-100 font-medium`}>KEYBOARD GAMING</h1>
					<p className="text-[12px] text-zinc-400">suspendo-tenetur</p>
					<p className="text-sm mt-2 text-slate-100">$109.99</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
