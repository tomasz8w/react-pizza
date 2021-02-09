import './PizzaItem.css'
import PizzaItemHeader from './PizzaItemHeader'

function PizzaItem(props){
    const {name, description, price_medium} = props.pizza
    return (
    <div className="PizzaItem">
        <PizzaItemHeader pizzaName={name} pizzaPrice={price_medium}/>
        <div className="PizzaDescription">
            <p>{description}</p>
        </div>
      
    </div>
    );
  }

export default PizzaItem;