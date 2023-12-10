import Login from '@/pages/Login';

const LoginPage = ({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>;
}) => {
	console.log(searchParams, 'login');

	return <Login errorMessage={searchParams?.error as string} />;
};

export default LoginPage;
