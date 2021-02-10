import { CardHeader, CardMedia } from "@material-ui/core";
import { ControlPointDuplicateOutlined } from "@material-ui/icons";
import { useState } from "react";
import pizzaImg1 from './img/pizza1.jpg'
import pizzaImg2 from './img/pizza2.jpg'
import pizzaImg3 from './img/pizza2.jpg'
import pizzaImg4 from './img/pizza2.jpg'

function PizzaItemHeader(props) {
    const { pizzaName, pizzaPrice } = props;
    const pizzaImgSrc = [pizzaImg1, pizzaImg2, pizzaImg3, pizzaImg4]

    const [imgSrcIndex, setImgSrcIndex] = useState(Math.round((Math.random() * 3)));

    return (
        <div>
            <CardHeader title={pizzaName}
                subheader={pizzaPrice} />
            <CardMedia
                style={{ height: "150px" }}
                image={pizzaImgSrc[imgSrcIndex]}
            />
        </div>
    );
}

export default PizzaItemHeader;