import nextConnect from "next-connect";
import middleware from "@utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Db } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

interface UserApiRequest extends NextApiRequest {
	db: Db;
	query: {
		author: string;
		content: string;
	};
}
//custom typing of response here
handler.get(async (req: UserApiRequest, res: NextApiResponse) => {
	const { author, content } = req.query;

	if (!author || !content) {
		res.status(400).json({
			error: "Missing parameters"
		});
		return;
	}

	const newPostDocument = {
		author: author,
		content: content,
		date: new Date()
	};

	let doc = await req.db.collection("posts").insertOne(newPostDocument);

	res.json(newPostDocument);
});

export default handler;
