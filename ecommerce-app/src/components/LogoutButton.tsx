'use client';

import { LogoutAction } from '@/action/auth';

const LogoutButton = () => {
	return (
		<li onClick={() => LogoutAction()}>
			<a>Logout</a>
		</li>
	);
};

export default LogoutButton;
