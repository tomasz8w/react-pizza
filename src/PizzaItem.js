import { Card, CardContent, Collapse, IconButton, Typography, CardActions, Grid } from '@material-ui/core';
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PizzaItemHeader from './PizzaItemHeader'

const pizzaImgSrc = ['pizza1.jpg', 'pizza2.jpg', 'pizza3.jpg', 'pizza4.jpg']

function PizzaItem(props) {
    const pizza = props.pizza;
    const selectedSize = props.selectedSize;
    const addToCart = props.addToCart;

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ "minHeight": "380px" }}>
                <PizzaItemHeader
                    pizza={pizza}
                    selectedSize={selectedSize}
                    addToCart={addToCart} />
                <CardContent>

                    <CardActions disableSpacing>
                        <IconButton
                            onClick={handleExpandClick}
                            aria-label="show-more"
                            aria-expanded={expanded}>
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography color="textSecondary" component="p">
                                <p>{pizza.description}</p>
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default PizzaItem;