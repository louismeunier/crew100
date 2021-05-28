import { Paper, Grid } from "@material-ui/core";

interface PostType {
	author: string;
	content: string;
	date: Date;
}

export default function Posts(props: { posts: PostType[] }) {
	return (
		<Grid container direction="column">
			{props.posts.map((post, index) => {
				return (
					<Grid item>
						<Paper key={index}>
							<h1>{post.author}</h1>
							<p>{post.content}</p>
							<h3>{post.date}</h3>
						</Paper>
					</Grid>
				);
			})}
		</Grid>
	);
}
