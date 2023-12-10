import Register from '@/pages/Register';

const RegisterPage = ({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>;
}) => {
	return <Register errorMessage={searchParams?.error as string} />;
};

export default RegisterPage;
