import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { grey } from '@mui/material/colors';
import { DarkMode, Troubleshoot } from '@mui/icons-material';
import  JavascriptIcon  from '@mui/icons-material/Javascript';
import { WbSunny } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';


const pages = ['Me', 'Skills', 'Projects', 'Education', 'Experience']; 
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function Navbar({mode, setMode}) {
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



const root = document.documentElement;

  const handleModeConfig = () => {
    if(mode===true)
    {
      
      root.style.setProperty("--background-color", "black")
      root.style.setProperty("--color" , "white")
      setMode(false)

    }else if(mode===false){

      root.style.setProperty("--background-color", "#f5f5f5")
      root.style.setProperty("--color", "black")
      setMode(true)
    }

  }
  const handleGithub = () => {
    window.open("https://github.com/ZaliWow", '_blank');
  }
  const handleLinkedin = () => {

    window.open("https://www.linkedin.com/in/william-david-morales-pineda-551589249/", '_blank');
     
  }
  if(mode===true)
  return (
    <AppBar position="fixed" elevation={0} sx={{backgroundColor: grey[100], color: 'black'}}>
  <Container maxWidth="xl"  >
    <Toolbar disableGutters>
      <JavascriptIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        DAVID MORALES
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
        <IconButton
          variant="dark"
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
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
            color: 'black',
          }}
        >
          {pages.map((page) => (
             <Button
             key={page}
             href={'#' + page }
             onClick={handleCloseNavMenu}
             sx={{ my: 2, color: 'black', display: 'block' }}
           >
             {page}
           </Button>
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
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        
      </Typography>

      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      
      </Box>

      <Box sx={{ justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
      
          <Button
            key={page}
            href={'#' + page }
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
       <Tooltip title="Swap Mode" >
       <IconButton onClick={handleLinkedin} sx={{ p: 0 , marginLeft:'10px'}}>
            <LinkedIn  sx={{ color: 'black' }} />
          </IconButton> 
          <IconButton onClick={handleGithub} sx={{ p: 0 , marginLeft:'10px'}}>
            <GitHub  sx={{ color: 'black' }} />
          </IconButton>
         
          <IconButton onClick={handleModeConfig} sx={{ p: 0 , marginLeft:'10px'}}>
            
            <DarkMode sx={{ color: 'red' }} />
          </IconButton>
          
        </Tooltip>
    </Toolbar>
  </Container>
</AppBar>

  );
/* ------------------------------------------------------------------------------------------------------------
----------------------- DARK MODE
---------------------------------------------------------------                           */
  else if(mode===false)
  return (
    <AppBar position="fixed" elevation={0} sx={{backgroundColor: 'black', color: 'white'}}>
  <Container maxWidth="xl"  >
    <Toolbar disableGutters>
      <JavascriptIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        DAVID MORALES
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
        <IconButton
          variant="dark"
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon sx={{color:'white'}}/>
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
            color: 'white',
         
          }}
        >
          {pages.map((page) => (
             <Button
             key={page}
             href={'#' + page }
             onClick={handleCloseNavMenu}
             sx={{ my: 2, color: 'black', display: 'block'}}
           >
             {page}
           </Button>
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
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'white',
          textDecoration: 'none',
        }}
      >
       
      </Typography>

      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      
      </Box>

      <Box sx={{ justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
      
          <Button
          variant='dark'
            key={page}
            href={'#' + page }
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
       <Tooltip title="Swap Mode" >
       <IconButton onClick={handleLinkedin} sx={{ p: 0 , marginLeft:'10px'}}>
            <LinkedIn  sx={{ color: 'white' }} />
          </IconButton> 
          <IconButton onClick={handleGithub}  sx={{ p: 0 , marginLeft:'10px'}}>
            <GitHub  sx={{ color: 'white' }} />
          </IconButton>
          <IconButton onClick={handleModeConfig} sx={{ p: 0, marginLeft:'10px' }}>
            <WbSunny  sx={{ color: 'red' }} />
          </IconButton>
          

        </Tooltip>
    </Toolbar>
  </Container>
</AppBar>

  );
}
