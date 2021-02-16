import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Navigation from './Navigation'
import Cart from './Cart'
import { Grid } from '@material-ui/core'
import { Switch, Route } from "react-router-dom";

function App() {

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
              <Content />
            </Route>
            <Route path="/cart">
              <Cart />
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
