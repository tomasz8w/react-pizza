import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Navigation from "./Navigation";
import Cart from "./Cart";
import Error from "./Error"
import { useEffect, useReducer } from "react";
import { Grid } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import useFetch from './services/useFetch'
import cartReducer from './CartReducer'

let initCart;
try {
  initCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
  initCart = [];
}

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initCart);

  const { data, error, loading } = useFetch("data.json");

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={3} sm={2}>
          <Navigation />
        </Grid>
        <Grid item xs={9} sm={9}>
          {!loading && !error &&
            <Switch>
              <Route exact path="/">
                <Content dispatch={dispatch} data={data} />
              </Route>
              <Route path="/cart">
                <Cart
                  cart={cart}
                  data={data}
                  dispatch={dispatch}
                />
              </Route>
            </Switch>
          }
          {error &&
            <Error />
          }
        </Grid>
      </Grid>

      <Grid container item xs={12} justify="center">
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
