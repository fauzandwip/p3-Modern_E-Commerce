type Props = {
	text: string;
};

const SubmitButton = ({ text }: Props) => {
	return (
		<button
			type="submit"
			className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-4 my-4 text-center bg-orange-600 hover:bg-orange-700 focus:ring-orange-800"
		>
			{text}
		</button>
	);
};

export default SubmitButton;
