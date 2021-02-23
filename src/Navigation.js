import { List, ListItem, ListItemText, ListItemLink } from "@material-ui/core";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Strona główna" />
      </ListItem>
      <ListItem button component={Link} to="/cart">
        <ListItemText primary="Koszyk" />
      </ListItem>
    </List>
  );
}

export default Navigation;
