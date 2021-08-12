import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
  root: {
    
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
    style={{  background:"#EEEEEE", zIndex:"0"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          {props.icons[0]}
        </ListItemIcon>
        <ListItemText primary={props.default[0]} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
        {props.icons[0]}
        </ListItemIcon>
        <ListItemText primary={props.default[1]} />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
        {props.icons[0]}
        </ListItemIcon>
        <ListItemText primary={props.default[2]} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{position:"absolute",background:"#EEEEEE",zIndex:'1'}} in={open} timeout="auto" unmountOnExit>
        {props.list.map((item) =>(
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        </List>
        ))}
      </Collapse>
    </List>
  );
}
