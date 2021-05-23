import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    wrapper: {
        marginBottom: theme.spacing(1),
        bottom: 0,
        position: "fixed",
        width: "100%"
    },
    container: {
        width: "50%"
    },
    link: {
        color: theme.palette.text.primary
    }
}))
export default function Footer() {
    const classes = useStyles();
    return (
        <Grid 
            container 
            justify="space-evenly"
            className={classes.wrapper}
        >
            <Grid 
                container
                justify="space-evenly"
                className={classes.container}
            >
                <Grid item>
                    <Typography 
                        className={classes.link}
                        variant="subtitle1"
                        component="a"
                        href="https://github.com/louismeunier/crew100/blob/main/LICENSE"
                    >
                        site licensed under the GNU General Public License v3.0
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}