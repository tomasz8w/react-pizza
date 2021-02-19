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
  const { openBackdropCart, cart } = props;
  const numOfItemsInCart = cart
    .map((e) => e.quantity)
    .reduce((sum, e) => sum + e, 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={11}>
            <Typography>Pizza portal</Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={openBackdropCart}>
              <Badge
                badgeContent={numOfItemsInCart}
                style={{ color: "#ffffff" }}
              >
                <ShoppingCartIcon color="secondary" fontSize="large" />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
