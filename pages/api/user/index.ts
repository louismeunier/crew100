import nextConnect from "next-connect";
import middleware from "@db/middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Db } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

interface UserApiRequest extends NextApiRequest {
	db: Db;
	query: {
		name: string;
	};
}
//custom typing of response here
handler.get(async (req: UserApiRequest, res: NextApiResponse) => {
	//do i have to do error handling here?
	const filter = {
		name: req.query.name
	};

	let doc = await req.db.collection("users").findOne(filter);
	console.log(doc);
	if (!doc) {
		res.status(404).json({
			error: "User not found"
		});
	} else {
		res.json(doc);
	}
});

export default handler;
