import { compareTextWithHash } from '@/db/helpers/hash';
import { signToken } from '@/lib/jwt';
import {
	UserModel,
	UserInput,
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
		console.log('>>> POST login triggered');
		const body: UserInput = await req.json();
		const validation = User.safeParse(body);

		if (!validation.success) {
			// console.log('trigerr');
			throw validation.error;
		}

		console.log(body, '>>> input');

		const user: UserModel = await getUserByEmailOrUsername(body.email);

		if (!user || !compareTextWithHash(body.password, user.password)) {
			return NextResponse.json(
				{
					message: 'Invalid email/password',
				},
				{
					status: 401,
				}
			);
		}

		const access_token = signToken({ id: user._id, email: user.email });
		return NextResponse.json(
			{
				message: 'Success Login',
				data: {
					access_token,
				},
			},
			{
				status: 202,
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
