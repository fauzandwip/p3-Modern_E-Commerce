import { ObjectId } from 'mongodb';
import { getDB } from '../config';
import { Product } from './products';

export interface NewWishlist {
	userId: string;
	productId: string;
}

export interface WishlistModel extends NewWishlist {
	_id: ObjectId;
	createdAt: Date;
	updatedAt: Date;
	product: Product;
}

export const addWishlist = async (data: NewWishlist) => {
	const currentDate = new Date();
	const db = await getDB();
	const response = await db.collection('Wishlist').insertOne({
		userId: new ObjectId(data.userId),
		productId: new ObjectId(data.productId),
		createdAt: currentDate,
		updatedAt: currentDate,
	});
	return response;
};

export const deleteWishlist = async (id: string) => {
	const db = await getDB();
	const response = await db
		.collection('Wishlist')
		.deleteOne({ _id: new ObjectId(id) });

	return response;
};

export const getWishlist = async (productId: string, userId: string) => {
	const db = await getDB();
	const response = await db.collection('Wishlist').findOne({
		productId: new ObjectId(productId),
		userId: new ObjectId(userId),
	});

	return response;
};

export const getWishlists = async (
	userId: string
): Promise<WishlistModel[]> => {
	const db = await getDB();
	const response = (await db
		.collection('Wishlist')
		.aggregate([
			{ $match: { userId: new ObjectId(userId) } },
			{
				$lookup: {
					from: 'Products',
					foreignField: '_id',
					localField: 'productId',
					as: 'product',
				},
			},
			{
				$unwind: {
					path: '$product',
					preserveNullAndEmptyArrays: true,
				},
			},
		])
		// .find({ userId: new ObjectId(userId) })
		.toArray()) as WishlistModel[];
	// console.log(response, 'wishlist db');

	return response;
};
