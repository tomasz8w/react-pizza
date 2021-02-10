import PizzaItem from './PizzaItem';
import { Grid } from '@material-ui/core'

function Content(props) {
  return (
    <Grid container direction="row" spacing={2}>
      {props.data.map(pizza => <PizzaItem pizza={pizza} key={pizza.id} />)}
    </Grid>
  )
};

export default Content;