import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, Paper } from 'material-ui';
import { Grow } from '@material-ui/core';
import { Button, MenuList, Popper, Stack } from '@mui/material';
import ClickAwayListener from 'material-ui/internal/ClickAwayListener';
import { MuiThemeProvider } from 'material-ui/styles';

export default function NavBar() {
  // Get and set state for the navbar
  const [ open, setOpen ] = React.useState(false);

  // anchorRef to store the reference to the button
  const anchorRef = React.useRef(null);

  // Toggle the navbar
  const handleToggle = () => { setOpen(prevOpen => !prevOpen); };

  // Close the navbar when the user clicks outside of it
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) { return; }
    setOpen(false);
  }

  return (
    <MuiThemeProvider>
      <Stack direction="row" spacing={2}>
        <div className="NavBar">
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            MENU
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <MenuItem><Link to="/">Photo of the Day</Link></MenuItem>
                    <MenuItem><Link to="/information">About Me</Link></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
          </Popper>
        </div>
      </Stack>
    </MuiThemeProvider>
  )
}
