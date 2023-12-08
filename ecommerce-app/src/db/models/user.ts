import { ObjectId } from 'mongodb';
import { getDB } from '../config';

export interface UserInput {
	name?: string;
	username: string;
	email: string;
	password: string;
}

export interface UserModel extends UserInput {
	_id: ObjectId;
}

export interface UserResponse extends Omit<UserInput, 'password'> {
	_id: ObjectId;
}

export const createUser = async (userData: UserInput) => {
	const db = await getDB();
	const newUser = await db.collection('Users').insertOne(userData);
	return newUser;
};

export const getUserById = async (id: string): Promise<UserResponse> => {
	const db = await getDB();
	const user = (await db
		.collection('Users')
		.findOne({ _id: new ObjectId(id) })) as UserResponse;
	return user;
};

export const getUserByEmailOrUsername = async (
	input: string
): Promise<UserModel> => {
	const db = await getDB();
	const user = (await db
		.collection('Users')
		.findOne({ $or: [{ email: input }, { username: input }] })) as UserModel;

	return user;
};
