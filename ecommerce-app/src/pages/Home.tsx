import Banner from '@/components/Banner';
import CardList from '@/components/CardList';
import ShopInformation from '@/components/ShopInformation';

const Home = () => {
	return (
		<div className="flex flex-col w-full bg-zinc-950 pt-24">
			<div className="flex w-full px-16 mt-14">
				<div className="flex-1 items-center">
					<ShopInformation />
				</div>
				<div className="flex-1">
					<Banner />
				</div>
			</div>
			<CardList />
		</div>
	);
};

export default Home;
