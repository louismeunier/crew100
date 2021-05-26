import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useSession, signOut } from "next-auth/client";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
	},
}));

export default function Profile() {
	const classes = useStyles();
	const [session, loading] = useSession();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				Profile
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
				{session && !loading && (
					<MenuItem onClick={handleClose}>{session.user.name}</MenuItem>
				)}
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={() => signOut()}>Logout</MenuItem>
			</Menu>
		</div>
	);
}
