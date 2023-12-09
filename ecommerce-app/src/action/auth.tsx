'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const LogoutAction = async () => {
	console.log('trigerr auth action');

	cookies().get('Authorization')?.value && cookies().delete('Authorization');

	redirect('/login');
};

export default LogoutAction;
