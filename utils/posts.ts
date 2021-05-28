export default async function getPosts(limit: number) {
	const postResponse = await fetch(
		`http://localhost:3000/api/posts?limit=${limit}`
	);
	console.log(postResponse);
	return postResponse;
}
