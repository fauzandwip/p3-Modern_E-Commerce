import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({
	path: __dirname + '/../../../.env.local',
});

const connectionString = process.env.MONGODB_CONNECTION_STRING;

if (!connectionString) {
	throw new Error('MONGODB_CONNECTION_STRING is not defined');
}

let client: MongoClient;
export const getMongoClientInstance = async () => {
	if (!client) {
		client = new MongoClient(connectionString);
		await client.connect();
	}
	return client;
};

export const getDB = async () => {
	const client = await getMongoClientInstance();
	const db = client.db(process.env.MONGODB_DB_NAME);
	return db;
};
