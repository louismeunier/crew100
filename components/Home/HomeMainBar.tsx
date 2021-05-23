import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
        textAlign: "center",
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8)
    },
    title: {
        textDecoration: "underline"
    },
    subtitle: {
        fontStyle: "italic"
    }
}))

export default function HomeMainBar() {
    const classes = useStyles();

    return (
        <Grid 
            container 
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.container}
        >
            <Grid item>
            <Typography className={classes.title} variant="h1" color={"secondary"}>
                Crew 100
            </Typography>
            <Typography className={classes.subtitle} variant="h4">
                Rotary Scout Reservation's own Venturing crew
            </Typography>
            </Grid>
        </Grid>
    )
}