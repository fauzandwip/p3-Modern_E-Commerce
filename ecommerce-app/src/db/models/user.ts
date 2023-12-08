import { ObjectId } from 'mongodb';
import { getDB } from '../config';

interface InputUser {
	name?: string;
	username: string;
	email: string;
	password: string;
}

interface UserModel extends Omit<InputUser, 'password'> {
	_id: ObjectId;
}

export const createUser = async (userData: InputUser) => {
	const db = await getDB();
	const newUser = await db.collection('Users').insertOne(userData);
	return newUser;
};

export const getUserById = async (id: string): Promise<UserModel> => {
	const db = await getDB();
	const user = (await db
		.collection('Users')
		.findOne({ _id: new ObjectId(id) })) as UserModel;
	return user;
};
