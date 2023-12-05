type Props = {
	text: string;
	type?: string;
	id: string;
	placeholder: string;
};

const Input = ({ text, type = 'text', id, placeholder }: Props) => {
	return (
		<div className="mb-6">
			<label
				htmlFor={id}
				className="block mb-1 ps-2 text-[12px] text-slate-300"
			>
				{text}
			</label>
			<input
				type={type}
				id={id}
				className="text-sm rounded-lg block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-slate-500 focus:border-slate-500"
				placeholder={placeholder}
				// placeholder="•••••••••"
			/>
		</div>
	);
};

export default Input;
