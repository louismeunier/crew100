import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	title: {
		fontFamily: "Roboto Slab",
		textDecoration: "underline"
	},
	container: {
		width: "100%",
		textAlign: "center"
	}
}));

interface propTypes {
	title: string;
}

export default function TitleBar(props: propTypes) {
	const classes = useStyles();
	const { title } = props;

	return (
		<Grid item className={classes.container}>
			<Typography className={classes.title} variant="h2" color={"secondary"}>
				{title}
			</Typography>
		</Grid>
	);
}
