import './PizzaItem.css'

function PizzaItem(props){
    return (
    <div className="PizzaItem">
      <p>{props.pizza.name}</p>
      <p>{props.pizza.description}</p>
      <p>{props.pizza.price_medium}</p>
    </div>
    );
  }

export default PizzaItem;