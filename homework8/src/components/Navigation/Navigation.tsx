import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Navigation = () => {
  return (
    <List dense>
      <ListItem disableGutters>
        <Link to="/">Home</Link>
      </ListItem>
    </List>
  );
};

export default Navigation;