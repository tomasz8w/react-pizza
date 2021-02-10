import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Navigation from './Navigation'
import data from './data.json'
import { Grid } from '@material-ui/core'

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
        <Grid item xs={9} sm={7}>
          <Content data={data} />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>

    </Grid>
  );
}

export default App;
