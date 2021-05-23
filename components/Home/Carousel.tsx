import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Card, CardActionArea, Typography, CardActions, CardContent } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    carousel: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "80vw",
        height: "auto"
    },
    itemRoot: {
        maxWidth: "100vw",
        height: "auto"
    },
    item: {
        height: "auto"
    }
}))

interface itemProps {
    item: {
        name: string
        description: string
        text: string
    }
}

export default function CarouselComponent() {
    const classes = useStyles();
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            text: "Text 1"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            text: "Text 2"
        }
    ]

    return (
        <Carousel className={classes.carousel}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props: itemProps) {
    const classes = useStyles();
    const { name, description, text } = props.item;
    return (
        <Card className={classes.itemRoot}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{name}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{description}
					</Typography>
					{text && (
						<CardActions>
							<Button
								href={"/"}
								color='primary'
								variant='outlined'
							>
								{text}
							</Button>
						</CardActions>
					)}
				</CardContent>
			</CardActionArea>
		</Card>
    )
}