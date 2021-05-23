import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import ImageIcon from "@material-ui/icons/Image";
import DateRangeIcon from "@material-ui/icons/DateRange";
import InfoIcon from "@material-ui/icons/Info";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
	list: {
		width: 400,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

export default function Sidebar() {
	const classes = useStyles();

	const [state, setState] = React.useState({
		open: false,
	});

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ open: open });
		};

	return (
		<div>
			<React.Fragment key={"left"}>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
					onClick={toggleDrawer(true)}
				>
					<MenuIcon />
				</IconButton>
				<Drawer
					className={classes.list}
					anchor={"left"}
					open={state.open}
					onClose={toggleDrawer(false)}
				>
					<List>
						<ListItem divider>
							<ListItemText>
								<Typography variant="h4" color={"primary"}>
									<Link href="/">Crew 100</Link>
								</Typography>
							</ListItemText>
						</ListItem>
						<ListItem button component="a" href="/pictures">
							<ListItemIcon>
								<ImageIcon />
							</ListItemIcon>
							<ListItemText primary={"Pictures"} />
						</ListItem>
						<ListItem button component="a" href="/calendar">
							<ListItemIcon>
								<DateRangeIcon />
							</ListItemIcon>
							<ListItemText primary={"Calendar"} />
						</ListItem>
						<ListItem button component="a" href="/contact">
							<ListItemIcon>
								<PermContactCalendarIcon />
							</ListItemIcon>
							<ListItemText primary={"Contact"} />
						</ListItem>
						<ListItem button component="a" href="/about">
							<ListItemIcon>
								<InfoIcon />
							</ListItemIcon>
							<ListItemText primary={"About"} />
						</ListItem>
					</List>
				</Drawer>
			</React.Fragment>
		</div>
	);
}
