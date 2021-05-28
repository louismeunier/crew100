import nextConnect from "next-connect";
import middleware from "@utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Db } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

interface UserApiRequest extends NextApiRequest {
	db: Db;
	query: {
		name: string;
		email: string;
		googleID: string;
	};
}

handler.get(async (req: UserApiRequest, res: NextApiResponse) => {
	const { name, email } = req.query;
	//verify we have all the parameters we need
	if (!name || !email) {
		res.status(400).json({
			error:
				"Missing parameters, make sure to include name, email, and googleID"
		});
		return;
	}

	//check if user already exists
	const userURL = `http://localhost:3000/api/user?name=${name}`;
	const existingUser = await fetch(userURL);
	const userData = await existingUser.json();
	console.log(userData);
	if (!userData.error) {
		res.status(400).json({
			error: "User already exists"
		});
		return;
	}

	const newUserDoc = {
		name: name,
		email: email,
		role: "user"
	};

	let response = await req.db.collection("users").insertOne(newUserDoc);
	if (response.result.ok === 1) {
		const { name, email, role, _id } = response.ops[0];

		res.json({
			name: name,
			email: email,
			role: role
		});
	} else {
		res.status(500).json({
			error: "An unknown error occurred creating the server"
		});
	}
});

export default handler;
