import { getDB } from './../config';

const insertProducts = async () => {
	const db = await getDB();

	const { products } = require('./products.json');

	const response = await db.collection('Products').insertMany(products);
	return response;
};

insertProducts()
	.then((res) => {
		console.log(res);
		console.log('success insert products');
	})
	.catch((err) => console.log(err, '>>> errr'));
