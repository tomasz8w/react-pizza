import PizzaItem from './PizzaItem'

function Content(props){
    return (
      <div className="Content">
        {props.data.map(pizza => <PizzaItem pizza={pizza} key={pizza.id}/>)}
      </div>);
  };

export default Content;