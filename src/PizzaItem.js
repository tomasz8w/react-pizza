import './PizzaItem.css'

function PizzaItem(props){
    return (
    <div className="PizzaItem">
        <div className="PizzaHeader">
            <img src="./logo.svg" width='50px' height='50px' />
            <p>{props.pizza.name}</p>
            <p>{props.pizza.price_medium}</p>
        </div>
        <div className="PizzaDescription">
            <p>{props.pizza.description}</p>
        </div>
      
    </div>
    );
  }

export default PizzaItem;