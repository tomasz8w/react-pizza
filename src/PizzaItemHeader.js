import { CardHeader, CardMedia, IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useCart } from "./services/cartContext";

function PizzaItemHeader(props) {
  const pizza = props.pizza;
  const selectedSize = props.selectedSize;

  const { dispatch } = useCart();

  const getPizzaPrice = () => {
    return pizza.price[selectedSize];
  };

  return (
    <>
      <CardHeader
        title={pizza.name}
        subheader={getPizzaPrice() + " zł"}
        action={
          <IconButton
            onClick={() => {
              dispatch({ type: "add", id: pizza.id, size: selectedSize });
            }}
          >
            <AddShoppingCartIcon />
          </IconButton>
        }
      />
      {pizza.image !== null ? (
        <CardMedia
          style={{ height: "150px" }}
          image={"https://restaumatic.imgix.net" + pizza.image}
        />
      ) : null}
    </>
  );
}

export default PizzaItemHeader;
