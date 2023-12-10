import { getDB } from './../config';
import { writeFileSync } from 'fs';

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

// interface Product {
// 	name: string;
// 	slug: string;
// 	description: string;
// 	excerpt: string;
// 	price: number;
// 	tags: string[];
// 	thumbnail: string;
// 	images: string[];
// 	createdAt: string;
// 	updatedAt: string;
// }

// const products = require('./products.json').products;
// const newProducts = products.map((data: Product, i: number) => {
// 	// data.thumbnail = data.thumbnail + '&seed=' + i;
// 	data.images = [
// 		'https://source.unsplash.com/random/1000x1000/?product&seed=' +
// 			'productDetail' +
// 			i +
// 			1,
// 		'https://source.unsplash.com/random/1000x1000/?product&seed=' +
// 			'productDetail' +
// 			i +
// 			2,
// 		'https://source.unsplash.com/random/1000x1000/?product&seed=' +
// 			'productDetail' +
// 			i +
// 			3,
// 		'https://source.unsplash.com/random/1000x1000/?product&seed=' +
// 			'productDetail' +
// 			i +
// 			4,
// 		'https://source.unsplash.com/random/1000x1000/?product&seed=' +
// 			'productDetail' +
// 			i +
// 			5,
// 	];
// 	return data;
// });

// writeFileSync('newProducts.json', JSON.stringify(newProducts));
// console.log(newProducts, 'newProducts');
