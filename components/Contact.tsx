import { Grid, Paper, Typography, Link, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Discord } from "mdi-material-ui";
import MailIcon from "@material-ui/icons/Mail";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
	wrapperRow: {
		minHeight: "100%",
		marginTop: theme.spacing(2),
		width: "100%",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "start",
		flexDirection: "row"
	},
	wrapperColumn: {
		minHeight: "100%",
		marginTop: theme.spacing(2),
		width: "100%",
		display: "flex",
		justifyContent: "space-evenly",
		overflow: "hidden",
		flexDirection: "column"
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center"
	},
	icon: {
		verticalAlign: "middle",
		fill: "black",
		fontSize: "50px"
	},
	title: {
		color: "black"
	}
}));

export default function Contact() {
	const matches = useMediaQuery("(max-width:800px)");

	const classes = useStyles();

	const contacts = [
		{
			name: "Discord",
			value: "https://discord.gg/eqN4znTdQ8",
			icon: <Discord className={classes.icon} />,
			link: "https://discord.gg/eqN4znTdQ8"
		},
		{
			name: "Email",
			value: "crew100.rsr@gmail.com",
			icon: <MailIcon className={classes.icon} />,
			link: "mailto:crew100.rsr@gmail.com"
		}
	];

	const handleContactClick = (index: number) => {
		window.open(contacts[index].link);
	};

	return (
		<div className={matches ? classes.wrapperColumn : classes.wrapperRow}>
			{contacts.map((contact, index) => {
				return (
					<Paper className={classes.paper} elevation={3} key={index}>
						<Grid container direction="column">
							<Grid item>
								<Typography variant="h3" className={classes.title}>
									<IconButton onClick={() => handleContactClick(index)}>
										{contact.icon}
									</IconButton>
									{contact.name}
								</Typography>
							</Grid>
							<Grid item>
								<hr />
							</Grid>
							<Grid item>
								<Link href={contact.link} color="textPrimary">
									<Typography variant="h5">{contact.value}</Typography>
								</Link>
							</Grid>
						</Grid>
					</Paper>
				);
			})}
		</div>
	);
}
