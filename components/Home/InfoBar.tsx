import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import InfoIcon from "@material-ui/icons/Info";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

const useStyles = makeStyles(theme => ({
    infobar: {
        //backgroundColor: theme.palette.primary.main,
        marginBottom: theme.spacing(8),
        width: "auto"
    },
    button: {
        padding: theme.spacing(1)
    }
}))

export default function InfoBar() {
    const classes = useStyles();

    return (
        <Grid 
            container 
            justify="space-evenly"
            alignItems="center"
            className={classes.infobar}
        >
            <Button 
                className={classes.button}
                variant="contained" 
                color="primary"
                href="/contact"
                endIcon={<PermContactCalendarIcon />}
            >
                    Contact Us
            </Button>
            <Button 
                className={classes.button}
                variant="contained" 
                color="primary"
                href="/about" 
                endIcon={<InfoIcon />}
            >
                    Learn More
            </Button>
        </Grid>
    )
}