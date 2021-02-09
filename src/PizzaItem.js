import './PizzaItem.css'
import PizzaItemHeader from './PizzaItemHeader'

function PizzaItem(props){
    return (
    <div className="PizzaItem">
        <PizzaItemHeader pizza={props.pizza}/>
        <div className="PizzaDescription">
            <p>{props.pizza.description}</p>
        </div>
      
    </div>
    );
  }

export default PizzaItem;