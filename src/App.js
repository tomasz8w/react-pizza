import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Navigation from './Navigation'
import Cart from './Cart'
import data from './data.json'
import { useState } from 'react'
import { Grid } from '@material-ui/core'
import { Switch, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(id, size) {
    setCart((items) => {
      const productInCart = items.find((p) => p.id === id);
      if (productInCart) {
        return items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...items, { id, size, quantity: 1 }];
      }
    })
  }

  return (
    <Grid container direction='column'>

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
              <Cart cart={cart} data={data} />
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
