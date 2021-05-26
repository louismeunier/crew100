import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Sidebar from "@components/Header/Sidebar";
import Login from "@components/Login/Login";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		title: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
	})
);

export default function Header() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Sidebar />
					<div className={classes.title}></div>
					<Login />
				</Toolbar>
			</AppBar>
		</div>
	);
}
