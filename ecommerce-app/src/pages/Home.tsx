import Banner from '@/components/Banner';
import Card from '@/components/Card';
import CardList from '@/components/CardList';
import Image from 'next/image';

const Home = () => {
	return (
		<div className="flex flex-col w-full">
			<Banner />
			<CardList />
			{/* <Image src="/fnatic-two-person.jpeg" alt="" width={200} height={200} /> */}
		</div>
	);
};

export default Home;
