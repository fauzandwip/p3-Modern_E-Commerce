import Input from '@/components/Input';
import SubmitButton from '@/components/SubmitButton';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { AuthResponse } from './Register';

const Login = ({ errorMessage }: { errorMessage: string }) => {
	const handleLogin = async (formData: FormData) => {
		'use server';
		const email = formData.get('email');
		const password = formData.get('password');

		console.log({ email, password });
		const response = await fetch(process.env.BASE_URL + '/api/login', {
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const result = (await response.json()) as AuthResponse<{
			access_token: string;
		}>;
		console.log(response.ok, 'okkk');
		console.log(result, '>>> login ');

		if (!response.ok) {
			return redirect('/login?error=' + result.message);
		}

		if (result.data)
			cookies().set('Authorization', `Bearer ${result.data.access_token}`);

		return redirect('/');
	};

	return (
		<main className="flex bg-gray-900 w-full min-h-screen justify-center items-center">
			{/* form */}
			<div className=" flex flex-col items-center gap-5 w-4/12 p-10 rounded-2xl hover:shadow-md hover:shadow-orange-600 backdrop-blur-md transition-all delay-200">
				<h1 className="text-4xl font-extrabold tracking-tighter mb-10">
					LOGIN
				</h1>
				<form className="flex flex-col w-full" action={handleLogin}>
					<Input
						text="Email"
						id="email-form"
						name="email"
						placeholder="jack@gmail.com"
						type="email"
					/>
					<Input
						text="Password"
						id="password-form"
						name="password"
						placeholder="•••••••••"
						type="password"
					/>
					{errorMessage && (
						<p className=" text-center mt-2 text-sm text-red-500">
							{errorMessage}
						</p>
					)}
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
