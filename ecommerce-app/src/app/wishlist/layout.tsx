import ServerProtectedComponent from '@/components/ServerProtectedComponent';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ServerProtectedComponent>{children}</ServerProtectedComponent>
		</>
	);
};

export default Layout;
