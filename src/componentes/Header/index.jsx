import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const location = useLocation();

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#000000' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
          "Front-End: Construindo interfaces web com simplicidade, elegância e
          funcionalidade."
        </Typography>
        <List
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
              padding: '10px',
            },
          }}
        >
          <Link
            to="/"
            style={{ textDecoration: 'none', color: '#FFFFFF' }}
            onClick={() => setActivePage('/')}
          >
            <Button
              color="inherit"
              sx={{
                marginRight: 1,

                alignItems: 'center',
                justifyContent: 'center',
                border: activePage === '/' ? '2px solid #7CFC00' : 'none',
                borderRadius: '5px',
              }}
            >
              SOBRE MIM
            </Button>
          </Link>
          <Link
            to="/curriculo"
            style={{ textDecoration: 'none', color: '#FFFFFF' }}
            onClick={() => setActivePage('/curriculo')}
          >
            <Button
              color="inherit"
              sx={{
                marginRight: 1,
                border:
                  activePage === '/curriculo' ? '2px solid #7CFC00' : 'none',
                borderRadius: '5px',
              }}
            >
              CURRÍCULO
            </Button>
          </Link>
          <Link
            to="/projetos"
            style={{ textDecoration: 'none', color: '#FFFFFF' }}
            onClick={() => setActivePage('/projetos')}
          >
            <Button
              color="inherit"
              sx={{
                marginRight: 1,
                border:
                  activePage === '/projetos' ? '2px solid #7CFC00' : 'none',
                borderRadius: '5px',
              }}
            >
              PROJETOS
            </Button>
          </Link>
        </List>
        <IconButton
          size="large"
          edge="end"
          aria-label="menu"
          onClick={handleMobileMenuOpen}
          className="mobile-menu-button"
          sx={{
            backgroundColor: 'black',
            display: { xs: 'block', sm: 'block', md: 'none' },
          }}
        >
          <MenuIcon sx={{ color: '#FFFFFF' }} />
        </IconButton>
        <MobileMenu
          open={mobileMenuOpen}
          onClose={handleMobileMenuClose}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
