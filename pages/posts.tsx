import React from "react";
// Modules
import { NextPage } from "next/types";
import { InferGetStaticPropsType } from "next/types";
// Components
import Head from "next/head";
import Page from "@components/Meta/Page";
import PostsComponent from "@components/Posts";

interface PostType {
	author: string;
	content: string;
	date: Date;
}
function Posts({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>Crew 100 | Posts</title>
			</Head>
			<Page title="Posts">
				<PostsComponent posts={posts} />
			</Page>
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch("http://localhost:3000/api/posts?limit=5");
	const posts: PostType[] = await res.json();

	return {
		props: {
			posts
		}
	};
};

export default Posts;
