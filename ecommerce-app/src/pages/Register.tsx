import Input from '@/components/Input';
import Link from 'next/link';

const Register = () => {
	return (
		<main className="flex bg-gray-900 w-full min-h-screen justify-center items-center">
			<div className="flex justify-start items-start ps-16 w-7/12">
				<div className="py-8 px-4 text-left lg:py-16 w-3/4">
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
						We invest in the world’s potential
					</h1>
					<p className="mb-8 text-lg font-normal lg:text-xl text-gray-400">
						Here at Flowbite we focus on markets where technology, innovation,
						and capital can unlock long-term value and drive economic growth.
					</p>
				</div>
			</div>

			{/* form */}
			<div className="w-5/12 p-20">
				<form className="flex flex-col">
					<div className="flex gap-4">
						<div className="w-8/12">
							<Input text="Name" id="name-form" placeholder="Fullname" />
						</div>
						<div className="w-4/12">
							<Input
								text="Username"
								id="username-form"
								placeholder="Username"
							/>
						</div>
					</div>
					<Input
						text="Email"
						id="password-form"
						placeholder="Your email address"
						type="email"
					/>
					<Input
						text="Password"
						id="password-form"
						placeholder="Create a password"
						type="password"
					/>
					<button
						type="submit"
						className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center bg-orange-600 hover:bg-orange-700 focus:ring-orange-800"
					>
						Submit
					</button>
					<label className="block mt-4 ps-2 text-[12px] text-slate-400 w-full text-center">
						Already have an account?{' '}
						<Link href={'/login'} className="text-slate-300 underline">
							Log in
						</Link>
					</label>
				</form>
			</div>
		</main>
	);
};

export default Register;
