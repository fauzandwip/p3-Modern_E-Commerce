import { hashText } from '@/db/helpers/hash';
import {
	UserInput,
	UserModel,
	createUser,
	getUserByEmailOrUsername,
} from '@/db/models/user';
import { NextResponse } from 'next/server';
import { ZodError, z } from 'zod';

const User = z.object({
	username: z.string().trim().min(1, { message: 'Username is required' }),
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

		const user: UserModel = await getUserByEmailOrUsername(body.email);

		if (user) {
			if (user.email) {
				return NextResponse.json(
					{
						message: 'Email already exists',
					},
					{
						status: 401,
					}
				);
			}
			if (user.username) {
				return NextResponse.json(
					{
						message: 'Username must be unique',
					},
					{
						status: 401,
					}
				);
			}
		}

		await createUser({
			name: body.name,
			username: body.username,
			email: body.email,
			password: hashText(body.password),
		});

		return NextResponse.json(
			{
				message: 'Success Register',
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
