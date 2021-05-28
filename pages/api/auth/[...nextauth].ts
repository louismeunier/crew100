import createUser from "@utils/user";
import NextAuth from "next-auth";
//import { signIn } from 'next-auth/client'
import Providers from "next-auth/providers";

export default NextAuth({
	providers: [
		// OAuth authentication providers...
		Providers.Google({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET
		})
	],
	callbacks: {
		async signIn(user, account, profile) {
			createUser({ name: user.name, email: user.email });
			return true;
		}
	}
	// Optional SQL or MongoDB database to persist users
	//database: process.env.DATABASE_URL
});
