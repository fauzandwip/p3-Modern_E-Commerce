import { MouseEvent } from 'react';

type Props = {
	show: boolean;
	text: string;
	onClick: (e: MouseEvent) => Promise<void>;
};

const ButtonWishlist = ({ show, text, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			className={`py-5 w-full border-orange-600 bg-zinc-900 text-slate-100 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-slate-100 transition-all ease-in-out duration-300 delay-50 ${
				show ? 'none translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
			}`}
		>
			{text}
		</button>
	);
};

export default ButtonWishlist;
