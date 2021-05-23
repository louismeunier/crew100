import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#5C8001",
		},
		secondary: {
			main: "#FBB02D",
		},
		text: {
			primary: "#CCCCCC",
			secondary: "#5C8001",
			disabled: "#7CB518",
			hint: "#F3DE2C",
		},
	},
});

export default theme;
