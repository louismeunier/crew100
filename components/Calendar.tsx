import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const CALENDAR_URL =
	"https://calendar.google.com/calendar/embed?src=crew100.rsr%40gmail.com&ctz=America%2FNew_York";

const useStyles = makeStyles(theme => ({
	wrapper: {
		marginTop: theme.spacing(8),
		width: "100%",
		height: "100%",
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
		minHeight: 0
	},
	calendar: {
		border: "none",
		marginRight: theme.spacing(5),
		marginLeft: theme.spacing(5),
		flexGrow: 1,
		flex: "1 1 auto"
	}
}));

export default function Calendar() {
	const classes = useStyles();

	return (
		<Grid item className={classes.wrapper}>
			<iframe
				className={classes.calendar}
				src={CALENDAR_URL}
				scrolling="no"
			></iframe>
		</Grid>
	);
}
