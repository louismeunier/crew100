import React from "react";
// Modules
import { NextPage } from "next/types";
import Page from "@components/Meta/Page";
import AboutComponent from "@components/About";
import Head from "next/head";

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>Crew 100 | About</title>
			</Head>
			<Page title="About">
				<AboutComponent />
			</Page>
		</>
	);
};

export default About;
