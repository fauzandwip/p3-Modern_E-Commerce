import Banner from '@/components/Banner';
import CardList from '@/components/CardList';
import SeeAllButton from '@/components/SeeAllButton';
import ShopInformation from '@/components/ShopInformation';

export default function HomePage() {
	return (
		<div className="flex flex-col w-full bg-zinc-950 pt-24">
			<div className="flex w-full px-16 mt-14">
				<div className="flex-1 pe-10 items-center">
					<ShopInformation />
				</div>
				<div className="flex-1">
					<Banner />
				</div>
			</div>
			<CardList />
			<div className="w-full my-6 text-center">
				<SeeAllButton />
			</div>
		</div>
	);
}
