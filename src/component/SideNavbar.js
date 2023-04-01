import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../assets/images/Logo.png';
import Home from '../Pages/Home';
import {Link, useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';
import { UserAuth } from '../context/UserAuth';
import { Logout } from '@mui/icons-material';
import MuiDrawer from '@mui/material/Drawer';




const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SideNavbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [menuData, setMenuData] = React.useState('Home');

   
  const {logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () =>{
      try{
      await logout();
      navigate('/')
      console.log('You are logged out');
      }catch(e){
        console.log(e.message);
      }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
      position='fixed'
      open={open}
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      color='inherit'
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
       <img src={Logo} alt='Logo' style={{
            margin:'0 5px' ,
            width:'58px',
            height:'58px'
        }}/>
          </Typography>
          <nav style={{
            
        }}>
          <Link
            variant="button"
            color="text.primary"
            to='/Home'
            href="/Home"
            style={{
              textDecoration:'none',
              color:'#3A1212',
            }}

            sx={{ my: 1, mx: 1.5 }}
          >
            Home
          </Link>
          <Link
          style={{
            margin:'15px',
            textDecoration:'none',
            color:'#3A1212',
          }}
            variant="button"
            color="text.primary"
            href="#"
            to="/exercise/:id"
            sx={{ my: 1, mx: 1.5 }}
          >
            Exercises
          </Link>
          {/* <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            style={{
              
              textDecoration:'none',
              color:'#3A1212',
            }}
          >
            Support
          </Link> */}
          <Link
            variant="button"
            color="text.primary"
            href="#"
            to='/'
            sx={{ my: 1, mx: 1.5 }}
            style={{
              marginLeft:'1px',
              textDecoration:'none',
              color:'#3A1212',
            }}
          >
            Login
          </Link>
          
        </nav>
        
        <Button   href="/Register"variant="contained" sx={{ my: 1, mx: 1.5 }}
        style={{backgroundColor:'#ff2625'}}>
          Sing up
        </Button>

        <Button onClick={handleLogout} variant="contained"
        style={{backgroundColor:'silver', color:'black'}}>
        <Logout/>
        </Button>
        
        </Toolbar>
      </AppBar>



      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>

       {menuData == "Home"}
      </Main>
    </Box>
  );
}