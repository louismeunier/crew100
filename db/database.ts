import { Db, MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

async function database(
	req: { dbClient: MongoClient; db: Db },
	res: any,
	next: () => any
) {
	if (!client.isConnected()) await client.connect();
	req.dbClient = client;
	req.db = client.db("crew100");
	return next();
}

export default database;