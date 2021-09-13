import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { green, pink } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Box from '@material-ui/core/Box';
import BeachAccessRoundedIcon from '@material-ui/icons/BeachAccessRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  style: { width: '5rem', height: '5rem' },
}));

export default function SubheaderDividers() {
  const classes = useStyles();
  

  return (
    <List className={classes.root}>
      <Divider component="li" variant="inset" />
      <ListItem>
        <ListItemAvatar>  
          <Avatar className={classes.green}>
         < BeachAccessRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Current Projects" secondary="Enkomponi Siyaz'tshunela " />
      </ListItem>

      <Box
      sx={{
        width: 300,
        height: 300,
        bgcolor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    </List>

    

  );
}
