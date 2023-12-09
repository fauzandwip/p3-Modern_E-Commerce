import ServerProtectedComponent from '@/components/ServerProtectedComponent';
import React from 'react';

const LayoutProducts = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ServerProtectedComponent>{children}</ServerProtectedComponent>
		</>
	);
};

export default LayoutProducts;
