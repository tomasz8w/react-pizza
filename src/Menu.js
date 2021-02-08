import './Menu.css'

function MenuButton(props){
    return <button type="button">{props.name}</button>
  }

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

export default Menu;