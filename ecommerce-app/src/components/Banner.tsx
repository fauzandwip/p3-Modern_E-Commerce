'use client';

import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
	return (
		<Carousel
			autoPlay={true}
			showArrows={true}
			infiniteLoop={true}
			showIndicators={true}
			showThumbs={false}
			showStatus={false}
		>
			<div>
				<Image
					src="https://source.unsplash.com/random/1000x1000/?product&seed=banner1"
					alt="Banner"
					width={700}
					height={700}
					className="rounded-2xl"
				/>
			</div>
			<div>
				<Image
					src="https://source.unsplash.com/random/1000x1000/?product&seed=banner2"
					alt="Banner"
					width={700}
					height={700}
					className="rounded-2xl"
				/>
			</div>
			<div>
				<Image
					src="https://source.unsplash.com/random/1000x1000/?product&seed=banner3"
					alt="Banner"
					width={700}
					height={700}
					className="rounded-2xl"
				/>
			</div>
		</Carousel>
	);
};

export default Banner;
