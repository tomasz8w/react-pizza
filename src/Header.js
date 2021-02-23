import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Badge,
  FormControl,
  MenuItem,
  Select,
  FormHelperText,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "./services/cartContext";
import restaurants from "./restaurants";

function Header(props) {
  const {
    openBackdropCart,
    data,
    selectedRestaurant,
    setSelectedRestaurant,
  } = props;
  const { cart } = useCart();

  const numOfItemsInCart = cart
    .map((e) => e.quantity)
    .reduce((sum, e) => sum + e, 0);

  const cartSumValue = cart
    .map((cartElement) =>
      data
        .filter((d) => d.id === cartElement.id)
        .map((d) => d.price[cartElement.size] * cartElement.quantity)
    )
    .reduce((sum, e) => sum + e[0], 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={7} lg={9}>
            <Typography>Pizza portal</Typography>
          </Grid>
          <Grid item xs={3} lg={1}>
            <FormControl>
              <Select
                style={{ color: "#ffffff" }}
                value={selectedRestaurant.url}
                onChange={(event) => {
                  const selected = restaurants.find(
                    (r) => r.url === event.target.value
                  );
                  setSelectedRestaurant(selected);
                }}
              >
                {restaurants.map((restaurant) => (
                  <MenuItem key={restaurant.url} value={restaurant.url}>
                    {restaurant.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText style={{ color: "#ffffff" }}>
                Wybrana pizzeria
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={2} container alignItems="center" justify="center">
            <IconButton onClick={openBackdropCart}>
              <Badge
                badgeContent={numOfItemsInCart}
                style={{ color: "#ffffff" }}
              >
                <ShoppingCartIcon color="secondary" fontSize="large" />
              </Badge>
            </IconButton>
            <Typography>{cartSumValue} zł</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
