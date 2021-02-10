import { List, ListItem, ListItemText, Menu, MenuItem } from '@material-ui/core';

function Navigation() {
  return (
    <List>
      <ListItem button >
        <ListItemText primary="Strona glowna" />
      </ListItem>
      <ListItem button >
        <ListItemText primary="Kontakt" />
      </ListItem>
    </List>
  );
}

export default Navigation;