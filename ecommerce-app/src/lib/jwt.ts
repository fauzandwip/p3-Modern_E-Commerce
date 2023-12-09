// import jsonwebtoken from 'jsonwebtoken';
import jwt, { JwtPayload } from 'jsonwebtoken';
import * as jose from 'jose';

const SECRET_KEY = process.env.JWT_SECRET_KEY as string;

export const signToken = (payload: JwtPayload) => {
	return jwt.sign(payload, SECRET_KEY);
};

export const readPayloadJose = async <T>(token: string): Promise<T> => {
	const secret = new TextEncoder().encode(SECRET_KEY);
	const { payload } = await jose.jwtVerify<T>(token, secret);
	return payload;
};
