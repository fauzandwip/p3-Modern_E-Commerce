import Input from '@/components/Input';
import Link from 'next/link';

const Login = () => {
	return (
		<main className="flex bg-gray-900 w-full min-h-screen justify-center items-center">
			{/* form */}
			<div className=" flex flex-col items-center gap-5 w-4/12 p-10 rounded-2xl hover:shadow-md hover:shadow-orange-600 backdrop-blur-md transition-all delay-200">
				<h1 className="text-4xl font-extrabold tracking-tighter mb-10">
					LOGIN
				</h1>
				<form className="flex flex-col w-full">
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
						className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-4 my-4 text-center bg-orange-600 hover:bg-orange-700 focus:ring-orange-800"
					>
						Log In
					</button>
				</form>
				<p className="block ps-2 text-[12px] text-slate-400 w-full text-center">
					Don&apos;t have account?{' '}
					<Link href={'/register'} className="text-slate-300 underline">
						Create an account
					</Link>
				</p>
			</div>
		</main>
	);
};

export default Login;
