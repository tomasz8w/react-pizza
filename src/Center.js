import './Center.css'
import Menu from './Menu'
import PizzaItem from './PizzaItem'

function Center(props){
    return (<div className="Center">
            <Menu />
            <Content data={props.data} />
            </div>);
  };

  function Content(props){
    return (
      <div className="Content">
        {props.data.map(data => <PizzaItem pizza={data} />)}
      </div>);
  };

export default Center;