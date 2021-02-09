import './PizzaItemHeader.css'

function PizzaItemHeader(props){
    const {pizzaName, pizzaPrice} = props;
    return (
        <div className="PizzaItemHeader">
            <img src="./logo.svg" width='50px' height='50px' />
            <p>{pizzaName}</p>
            <p>{pizzaPrice}</p>
        </div>
    );
  }

export default PizzaItemHeader;