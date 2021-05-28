interface userType {
	name: string;
	email: string;
}

export default async function createUser(user: userType) {
	const response = await fetch(
		`http://localhost:3000/api/user/new?name=${user.name}&email=${user.email}`
	);
	return response;
}
