import Input from '@/components/Input';
import ShopInformation from '@/components/ShopInformation';
import SubmitButton from '@/components/SubmitButton';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export type AuthResponse<T = {}> = {
	message?: string;
	data?: T;
};

const handleRegister = async (formData: FormData) => {
	'use server';
	const name = formData.get('name');
	const username = formData.get('username');
	const email = formData.get('email');
	const password = formData.get('password');

	console.log({ name, username, email, password });
	const response = await fetch(process.env.BASE_URL + '/api/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name,
			username,
			email,
			password,
		}),
	});

	const result = (await response.json()) as AuthResponse;
	console.log(response.ok, 'okkk');
	console.log(result);

	if (!response.ok) {
		return redirect('/register?error=' + result.message);
	}

	return redirect('/login');
};

const RegisterPage = ({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>;
}) => {
	return (
		<main className="flex bg-gray-900 w-full min-h-screen justify-center items-center">
			<div className="flex justify-start items-start ps-16 w-7/12">
				<div className="w-3/4">
					<ShopInformation />
				</div>
			</div>

			{/* form */}
			<div className="w-5/12 p-20">
				<h1 className="text-4xl font-extrabold w-full text-center tracking-tighter mb-14">
					REGISTER
				</h1>
				<form className="flex flex-col" action={handleRegister}>
					<div className="flex gap-4">
						<div className="w-8/12">
							<Input
								text="Name"
								id="name-form"
								name="name"
								placeholder="Fullname"
							/>
						</div>
						<div className="w-4/12">
							<Input
								text="Username"
								id="username-form"
								name="username"
								placeholder="Username"
							/>
						</div>
					</div>
					<Input
						text="Email"
						id="email-form"
						name="email"
						placeholder="Your email address"
						type="email"
					/>
					<Input
						text="Password"
						id="password-form"
						name="password"
						placeholder="Create a password"
						type="password"
					/>
					{searchParams?.error && (
						<p className=" text-center mt-2 text-sm text-red-500">
							{searchParams?.error}
						</p>
					)}
					<SubmitButton text="Register" />
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

export default RegisterPage;
