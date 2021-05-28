import React from "react";
// Modules
import { NextPage } from "next/types";
// Components
import CalendarComponent from "@components/Calendar";
import Page from "@components/Meta/Page";
import Head from "next/head";

const Calendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>Crew 100 | Calendar</title>
			</Head>
			<Page title="Calendar">
				<CalendarComponent />
			</Page>
		</>
	);
};

export default Calendar;
