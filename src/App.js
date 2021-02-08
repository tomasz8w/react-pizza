import logo from './logo.svg';
import './App.css';

function Header() {
  return (<div className="Header">Pizza portal</div>);
};

function Footer(){
  return (<div className="Footer">Copyright 2021 TW</div>);
};

function Center(props){
  return (<div className="Center">
          <Menu />
          <Content data={props.data} />
          </div>);
};

function MenuButton(props){
  return <button type="button">{props.name}</button>
}

function PizzaList(){

}

function PizzaItem(props){
  return (
  <div className="PizzaItem">
    <p>{props.pizza.name}</p>
    <p>{props.pizza.description}</p>
    <p>{props.pizza.price_medium}</p>
  </div>
  
  );
}

function Content(props){
  return (
    <div className="Content">
      {props.data.map(data => <PizzaItem pizza={data} />)}
    </div>);
};

function Menu(){
  return (
    <div className="Menu">
      <menu>
        <li><MenuButton name="Strona glowna"/></li>
        <li><MenuButton name="Menu"/></li>
        <li><MenuButton name="Dostawa"/></li>
        <li><MenuButton name="Kontakt"/></li>
      </menu>
    </div>
  );
}

function App() {
  const data = [{"pizza": "Capriciosa"},
                {"pizza": "Margherita"}];
  const dataFile = require("./data.json");
  return (
    <div class="App">
      <Header />
      <Center data={dataFile}/>
      <Footer />
    </div>
    
  );
}

export default App;
