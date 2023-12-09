import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

type ProtectedProps = {
	children: React.ReactNode;
};

const ServerProtectedComponent = ({ children }: ProtectedProps) => {
	const token = cookies().get('Authorization');
	if (!token) {
		redirect('/login');
	}

	return <>{children}</>;
};

export default ServerProtectedComponent;
