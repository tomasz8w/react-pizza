import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Navigation from "./Navigation";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import useFetch from './services/useFetch'

function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) ?? [];
    } catch {
      return [];
    }
  });

  const { data } = useFetch("data.json");

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  function addToCart(id, size) {
    setCart((items) => {
      const productInCart = items.find((p) => p.id === id && p.size === size);
      if (productInCart) {
        return items.map((i) =>
          i.id === id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...items, { id, size, quantity: 1 }];
      }
    });
  }

  function deleteFromCart(id, size) {
    setCart((items) => {
      return items.filter(
        (i) => i.id !== id || (i.id === id && i.size !== size)
      );
    });
  }

  function changeQuantity(id, size, changeQuantityStep) {
    setCart((items) => {
      const productInCart = items.find((p) => p.id === id && p.size === size);
      if (productInCart.quantity + changeQuantityStep > 0) {
        return items.map((i) =>
          i.id === id && i.size === size
            ? { ...i, quantity: i.quantity + changeQuantityStep }
            : i
        );
      } else return items;
    });
  }

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
          <Switch>
            <Route exact path="/">
              <Content addToCart={addToCart} data={data} />
            </Route>
            <Route path="/cart">
              <Cart
                cart={cart}
                data={data}
                deleteFromCart={deleteFromCart}
                changeQuantity={changeQuantity}
              />
            </Route>
          </Switch>
        </Grid>
      </Grid>

      <Grid container item xs={12} justify="center">
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
