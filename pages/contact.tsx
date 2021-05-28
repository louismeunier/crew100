import React from "react";
// Modules
import { NextPage } from "next/types";
import Head from "next/head";
// Components
import Page from "@components/Meta/Page";
import ContactComponent from "@components/Contact";

const Contact: NextPage = () => {
	return (
		<>
			<Head>
				<title>Crew 100 | Contact</title>
			</Head>
			<Page title="Contact Us">
				<ContactComponent />
			</Page>
		</>
	);
};

export default Contact;
