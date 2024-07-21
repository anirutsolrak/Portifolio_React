import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const MobileMenu = ({ open, onClose, activePage, setActivePage }) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      sx={{
        display: { xs: 'block', md: 'none' },
        backgroundColor: 'black',
        color: '#FFFFFF',
      }}
    >
      <List sx={{ backgroundColor: 'black', height: '100%' }}>
        <Link
          to="/"
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          onClick={() => setActivePage('/')}
        >
          <ListItem button onClick={onClose}>
            <ListItemText
              primary="SOBRE MIM"
              sx={{
                border: activePage === '/' ? '2px solid #7CFC00' : 'none',
                borderRadius: '5px',
              }}
            />
          </ListItem>
        </Link>
        <Link
          to="/curriculo"
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          onClick={() => setActivePage('/curriculo')}
        >
          <ListItem button onClick={onClose}>
            <ListItemText
              primary="CURRÍCULO"
              sx={{
                border:
                  activePage === '/curriculo' ? '2px solid #7CFC00' : 'none',
                borderRadius: '5px',
              }}
            />
          </ListItem>
        </Link>
        <Link
          to="/projetos"
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          onClick={() => setActivePage('/projetos')}
        >
          <ListItem button onClick={onClose}>
            <ListItemText
              primary="PROJETOS"
              sx={{
                border:
                  activePage === '/projetos' ? '2px solid #7CFC00' : 'none',
                borderRadius: '5px',
              }}
            />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default MobileMenu;
