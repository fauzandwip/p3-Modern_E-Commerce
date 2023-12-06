import Input from '@/components/Input';
import SubmitButton from '@/components/SubmitButton';
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
						placeholder="jack@gmail.com"
						type="email"
					/>
					<Input
						text="Password"
						id="password-form"
						placeholder="•••••••••"
						type="password"
					/>
					<SubmitButton text="Log In" />
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
