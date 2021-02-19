import { CardHeader, CardMedia, IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function PizzaItemHeader(props) {
  const pizza = props.pizza;
  const dispatch = props.dispatch;
  const selectedSize = props.selectedSize;

  const getPizzaPrice = () => {
    return pizza.price[selectedSize];
  };

  return (
    <div>
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
    </div>
  );
}

export default PizzaItemHeader;
