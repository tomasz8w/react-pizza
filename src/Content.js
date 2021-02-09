import PizzaItem from './PizzaItem'

function Content(props){
    return (
      <div className="Content">
        {props.data.map(data => <PizzaItem pizza={data} />)}
      </div>);
  };

export default Content;