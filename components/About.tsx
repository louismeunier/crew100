import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	wrapper: {
		minHeight: "100%",
		marginTop: theme.spacing(2),
		width: "100%",
		display: "flex",
		alignItems: "center",
		flexDirection: "column"
	},
	paper: {
		padding: theme.spacing(2),
		width: "75%"
	},
	about: {
		padding: theme.spacing(2),
		textAlign: "center"
	}
}));

export default function About() {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<Paper className={classes.paper} elevation={3}>
				<Grid container justify="center">
					<Grid item className={classes.about}>
						<Typography variant="h4">
							Crew 100 is a BSA Venturing crew based out of Poestenkill, New
							York, in the Twin Rivers Council.
						</Typography>
					</Grid>
					<Grid item>
						<Divider />
					</Grid>
					<Grid item className={classes.about}>
						<Typography variant="h4">
							Originally created as a way for Rotary Scout Reservation staff to
							remain officially part of a BSA group while staffing, Crew 100 has
							begun to be a more traditional crew in recent years, though with
							membership open only to past and present RSR staff. members.
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
