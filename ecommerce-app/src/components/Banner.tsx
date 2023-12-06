import { Carousel } from 'flowbite-react';
import Image from 'next/image';

const Banner = () => {
	return (
		<div className="h-[60vh] px-16 py-10">
			<Carousel>
				<Image
					src={'/fnatic-two-person.jpeg'}
					alt="..."
					width={200}
					height={800}
				/>
				<Image
					src={'/fnatic-two-person.jpeg'}
					alt="..."
					width={200}
					height={800}
				/>
				<Image
					src={'/fnatic-two-person.jpeg'}
					alt="..."
					width={200}
					height={800}
				/>
				<Image
					src={'/fnatic-two-person.jpeg'}
					alt="..."
					width={200}
					height={800}
				/>
				<Image
					src={'/fnatic-two-person.jpeg'}
					alt="..."
					width={200}
					height={800}
				/>
			</Carousel>
		</div>
	);
};

export default Banner;
