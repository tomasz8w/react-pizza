import './Menu.css'
import MenuButton from './MenuButton'

function Menu(){
    return (

        <menu className="Menu"> 
          <MenuButton name="Strona glowna"/>
          <MenuButton name="Menu"/>
          <MenuButton name="Dostawa"/>
          <MenuButton name="Kontakt"/>
        </menu>

    );
  }

export default Menu;