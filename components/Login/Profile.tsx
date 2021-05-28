import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { signOut, getSession } from "next-auth/client";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	}
}));

export default function Profile() {
	const [session, setSession] = React.useState(null);
	const [user, setUser] = React.useState(null);
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	React.useEffect(() => {
		getSession().then(sess => {
			setSession(sess);
			fetch(`http://localhost:3000/api/user?name=${sess.user.name}`)
				.then(user => user.json())
				.then(userJson => {
					setUser(userJson);
				});
		});
	}, []);

	return (
		session && (
			<div>
				<Button
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					{session && session.user.name}
					<KeyboardArrowDownIcon />
				</Button>
				<Menu
					className={classes.root}
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					{user && <MenuItem>{user.role}</MenuItem>}
					<MenuItem onClick={handleClose}>My account</MenuItem>
					<MenuItem onClick={() => signOut()}>Logout</MenuItem>
				</Menu>
			</div>
		)
	);
}
