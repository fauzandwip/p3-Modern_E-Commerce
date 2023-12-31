import { ObjectId } from 'mongodb';
import { getDB } from '../config';

export interface Product {
	_id: ObjectId;
	name: string;
	slug: string;
	description: string;
	excerpt: string;
	price: number;
	tags: string[];
	thumbnail: string;
	images: string[];
	createdAt: Date;
	updatedAt: Date;
}

export interface ProductResponse extends Omit<Product, '_id'> {
	_id: string;
}

export const getAllProduct = async (
	search: string,
	skip: number,
	limit: number
): Promise<Product[]> => {
	console.log(search, '>>> trigerr get all mongodb');

	const db = await getDB();
	const products = (await db
		.collection('Products')
		.aggregate([
			{
				$match: { name: { $regex: search, $options: 'i' } },
			},
			{
				$skip: skip,
			},
			{
				$limit: limit,
			},
		])
		.toArray()) as Product[];
	return products;
};

export const getProductById = async (id: string): Promise<Product> => {
	console.log('>>> trigerr get productById mongodb');

	const db = await getDB();
	const products = (await db
		.collection('Products')
		.findOne({ _id: new ObjectId(id) })) as Product;
	return products;
};

export const getProductBySlug = async (slug: string): Promise<Product> => {
	console.log('>>> trigerr get productById mongodb');

	const db = await getDB();
	const products = (await db
		.collection('Products')
		.findOne({ slug })) as Product;
	return products;
};
