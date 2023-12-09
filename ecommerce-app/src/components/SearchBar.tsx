const SearchBar = () => {
	return (
		<form className="w-full">
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
					<svg
						className="w-6 h-6 text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="search"
					id="default-search"
					className="block w-full p-4 ps-14 text-lg border rounded-xl bg-zinc-950 border-gray-600 placeholder-gray-400 text-white focus:ring-slate-100 focus:border-slate-100"
					placeholder="Search products..."
					required
				/>
				{/* <button
							type="submit"
							className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Search
						</button> */}
			</div>
		</form>
	);
};

export default SearchBar;
