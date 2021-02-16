import { CardHeader, CardMedia, IconButton } from "@material-ui/core";
import { useState } from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import pizzaImg1 from './img/pizza1.jpg'
import pizzaImg2 from './img/pizza2.jpg'
import pizzaImg3 from './img/pizza2.jpg'
import pizzaImg4 from './img/pizza2.jpg'

function PizzaItemHeader(props) {
    const pizza = props.pizza;
    const addToCart = props.addToCart;
    const selectedSize = props.selectedSize;

    const pizzaImgSrc = [pizzaImg1, pizzaImg2, pizzaImg3, pizzaImg4];

    const getPizzaPrice = () => {
        return pizza.price[selectedSize];
    };

    const [imgSrcIndex, setImgSrcIndex] = useState(Math.round((Math.random() * 3)));

    return (
        <div>
            <CardHeader title={pizza.name}
                subheader={getPizzaPrice() + " zł"}
                action={
                    <IconButton onClick={() => { addToCart(pizza.id, selectedSize) }}>
                        <AddShoppingCartIcon />
                    </IconButton>} />
            <CardMedia
                style={{ height: "150px" }}
                image={pizzaImgSrc[imgSrcIndex]}
            />
        </div>
    );
}

export default PizzaItemHeader;