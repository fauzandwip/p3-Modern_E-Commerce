import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

type ProtectedProps = {
	children: React.ReactNode;
};

const ServerProtectedComponent = ({ children }: ProtectedProps) => {
	const token = cookies().get('Authorization');
	console.log(token, '>>> protected');

	if (!token) {
		return redirect('/login');
	}

	return <>{children}</>;
};

export default ServerProtectedComponent;
