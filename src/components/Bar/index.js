import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/RestaurantMenu';

const Bar = () => {
  return(
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >
          Gustov Restaurant
        </Typography>
        <Button color="inherit">Dish</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Bar