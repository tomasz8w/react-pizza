import './PizzaItemHeader.css'

function PizzaItemHeader(props){
    return (
        <div className="PizzaItemHeader">
            <img src="./logo.svg" width='50px' height='50px' />
            <p>{props.pizza.name}</p>
            <p>{props.pizza.price_medium}</p>
        </div>
    );
  }

export default PizzaItemHeader;