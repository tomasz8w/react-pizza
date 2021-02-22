import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Badge,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header(props) {
  const { openBackdropCart, cart, data } = props;

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
        <Grid container alignItems="center" >
          <Grid item xs={11}>
            <Typography>Pizza portal</Typography>
          </Grid>
          <Grid item xs={1} container alignItems="center" justify="center">
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
