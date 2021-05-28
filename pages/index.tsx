import React from "react";
import { NextPage } from "next/types";
import Grid from "@material-ui/core/Grid";
import HomeMainBar from "@components/Home/HomeMainBar";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "@components/Home/Carousel";
import InfoBar from "@components/Home/InfoBar";
import Head from "next/head";

const useStyles = makeStyles(theme => ({
	container: {
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2)
	},
	carouselWrapper: {
		width: "100%",
		marginBottom: theme.spacing(16)
	},
	infoWrapper: {
		width: "50%"
	}
}));

const HomePage: NextPage = () => {
	const classes = useStyles();

	return (
		<>
			<Head>
				<title>Crew 100 | Home</title>
			</Head>
			<Grid
				container
				className={classes.container}
				direction="column"
				justify="center"
				alignItems="center"
			>
				<Grid item>
					<HomeMainBar />
				</Grid>
				<Grid item className={classes.infoWrapper}>
					<InfoBar />
				</Grid>
				<Grid item className={classes.carouselWrapper}>
					<Carousel />
				</Grid>
			</Grid>
		</>
	);
};

export default HomePage;
