'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const LogoutAction = () => {
	console.log('trigerr auth action');

	cookies().get('Authorization')?.value && cookies().delete('Authorization');

	redirect('/login');
};

export const isLogin = () => {
	return cookies().get('Authorization')?.value ? true : false;
};
