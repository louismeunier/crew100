import nextConnect from "next-connect";
import middleware from "@db/middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Db } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

interface UserApiRequest extends NextApiRequest {
	db: Db;
	query: {
		limit?: string;
	};
}
//custom typing of response here
handler.get(async (req: UserApiRequest, res: NextApiResponse) => {
	if (!req.query.limit) {
		res.status(400).json({
			error: "Missing limit param"
		});
		return;
	}

	let doc = await req.db
		.collection("posts")
		.find(
			{},
			{
				sort: {
					date: -1
				}
			}
		)
		.limit(parseInt(req.query.limit))
		.toArray();

	console.log(doc);
	if (!doc) {
		res.status(404).json({
			error: "Post not found"
		});
	} else {
		res.json(doc);
	}
});

export default handler;
