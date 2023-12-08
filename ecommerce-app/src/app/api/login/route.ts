import {
	UserInput,
	UserResponse,
	createUser,
	getUserByEmailOrUsername,
} from '@/db/models/user';
import { NextResponse } from 'next/server';
import { ZodError, z } from 'zod';

const User = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(5, { message: 'Password must contain at least 5 character(s)' })
		.max(16, { message: 'Password must not exceed 16 character(s)' }),
});

export async function POST(req: Request) {
	try {
		console.log('>>> post register triggered');
		const body: UserInput = await req.json();
		const validation = User.safeParse(body);

		if (!validation.success) {
			// console.log('trigerr');
			throw validation.error;
		}

		const user: UserResponse = await getUserByEmailOrUsername(body.email);

		if (!user) {
			return NextResponse.json(
				{
					message: 'Invalid email/password',
				},
				{
					status: 401,
				}
			);
		}

		return NextResponse.json(
			{
				message: 'Success Login',
			},
			{
				status: 201,
			}
		);
	} catch (error) {
		// console.log(error, 'erorrrr');
		if (error instanceof ZodError) {
			return NextResponse.json(
				{
					message: error.issues[0].message,
				},
				{
					status: 400,
				}
			);
		}

		return NextResponse.json(
			{
				message: 'Internal Server Error',
			},
			{
				status: 500,
			}
		);
	}
}
