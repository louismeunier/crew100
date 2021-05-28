import { Grid } from "@material-ui/core";
import TitleBar from "./TitleBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	container: {
		padding: theme.spacing(2),
		width: "100%",
		height: "70vh"
	},
	child: {
		width: "100%",
		height: "100%"
	}
}));

interface propTypes {
	title: string;
	children?: JSX.Element | JSX.Element[];
}

export default function Page(props: propTypes) {
	const classes = useStyles();
	const { title, children } = props;

	return (
		<Grid
			container
			className={classes.container}
			direction="row"
			justify="center"
			alignItems="center"
		>
			<Grid item>
				<TitleBar title={title} />
			</Grid>
			{children && (
				<Grid className={classes.child} item>
					{children}
				</Grid>
			)}
		</Grid>
	);
}
