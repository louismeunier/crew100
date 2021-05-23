import React from "react";
// Modules
import { AppProps } from "next/app";
import Head from "next/head";
// MUI Core
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
// Utils
import Header from "@components/Header/Header";
import Footer from "@components/Footer";
import theme from "../utils/theme";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	wrapper: {
		display: "flex",
		minHeight: "100vh",
		flexDirection: "column"
	},
	body: {
		flexGrow: 1
	},
	sides: {
		flexShrink: 0
	}
}))

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const classes = useStyles();
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles && jssStyles.parentElement) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<>
			<Head>
				<title>My App</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto+Slab&display=swap" rel="stylesheet"/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className={classes.wrapper}>
					<div className={classes.sides}>
						<Header />
					</div>
					<div className={classes.body}>
						<Component {...pageProps} />
					</div>
					<div className={classes.sides}>
						<Footer />
					</div>
				</div>
			</ThemeProvider>
		</>
	);
};

export default MyApp;
