import * as React from 'react';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

function Navbar() {

    const pages = ['Home', 'Menu', 'Eventos', 'Servicios'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', marginTop: '-100px', marginBottom: '50px',marginRight:'50px' }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            letterSpacing: '.3rem',
                            color: '#F5F5F5',
                            textDecoration: 'none',
                            fontSize: '31.25px',
                            lineHeight: '45.16px',
                            fontFamily: 'Jost, sans-serif'
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '23.12px', textAlign: "center" }} >{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Jost, sans-serif',
                            fontWeight: 900,
                            letterSpacing: '.3rem',
                            color: '#F5F5F5',
                            textDecoration: 'none',
                            fontSize: '31.25px',
                            lineHeight: '45.16px'
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    fontFamily: 'Jost, sans-serif',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    lineHeight: '23.12px',
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                    textDecoration: 'none',
                                    position: 'relative', // Añade posición relativa
                                    '&:hover': {
                                        borderBottom: '2px solid white', // Agrega una línea blanca debajo en hover
                                    },
                                    '&:active': {
                                        color: 'white', // Cambia el color del texto en el botón activo
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <AccountBoxIcon sx={{ fontSize: 35, color: 'white', zIndex: 1 }} />

                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
