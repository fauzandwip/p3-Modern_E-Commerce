// import jsonwebtoken from 'jsonwebtoken';
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY as string;

export const signToken = (payload: JwtPayload) => {
	return jwt.sign(payload, SECRET_KEY);
};
