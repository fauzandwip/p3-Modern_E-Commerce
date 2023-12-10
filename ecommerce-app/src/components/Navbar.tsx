'use client';

import LogoutAction from '../action/auth';

const Navbar = () => {
	return (
		<div className="navbar bg-zinc-950 fixed z-10">
			<div className="flex-1">
				<a className="text-slate-100 text-xl px-4 cursor-pointer" href="/">
					E-Commerce
				</a>
			</div>
			<div className="flex-none gap-4">
				{/* <Link href={'/products'}> */}
				<a href="/products">
					<div role="button" className="btn btn-ghost">
						<p className="text-slate-100">Product</p>
					</div>
				</a>
				{/* </Link> */}
				<div className="">
					<a href="/wishlist">
						<div role="button" className="btn btn-ghost btn-circle">
							<div className="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20"
									width="20"
									viewBox="0 0 512 512"
									strokeWidth={5}
									fill="white"
								>
									<path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
								</svg>
								{/* <span className="badge badge-sm indicator-item">8</span> */}
							</div>
						</div>
					</a>
				</div>
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{/* <li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li> */}
						{/* <li>
							<a>Wishlist</a>
						</li> */}
						<li onClick={() => LogoutAction()}>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
