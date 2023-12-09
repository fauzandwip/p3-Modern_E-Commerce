import { ObjectId } from 'mongodb';
import { getDB } from '../config';

interface NewWishlist {
	userId: string;
	productId: string;
}

interface Wishlist extends NewWishlist {
	_id: ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

export const addWishlist = async (data: NewWishlist) => {
	const currentDate = new Date();
	const db = await getDB();
	const response = await db.collection('Wishlist').insertOne({
		...data,
		createdAt: currentDate,
		updatedAt: currentDate,
	});
	return response;
};

export const getWishlist = async (userId: string): Promise<Wishlist[]> => {
	const db = await getDB();
	const response = (await db
		.collection('Wishlist')
		.find({ userId: new ObjectId(userId) })
		.toArray()) as Wishlist[];
	return response;
};
