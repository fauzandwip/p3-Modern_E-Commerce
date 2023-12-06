import Banner from '@/components/Banner';
import Card from '@/components/Card';
import CardList from '@/components/CardList';
import ShopInformation from '@/components/ShopInformation';
import Image from 'next/image';

const Home = () => {
	return (
		<div className="flex flex-col w-full">
			<div className="flex w-full px-16">
				<div className="flex-1 items-center">
					<ShopInformation />
				</div>
				<div className="flex-1">
					<Banner />
				</div>
			</div>
			<CardList />
			{/* <Image src="/fnatic-two-person.jpeg" alt="" width={200} height={200} /> */}
		</div>
	);
};

export default Home;
