import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { AppBar, CssBaseline, Stack, Toolbar,Typography,Button } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import { UserAuth } from '../context/UserAuth';
import { Logout } from '@mui/icons-material';



const Navbar = ()=> {

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
  
  return (
    
    
    // <Stack direction='row'
    // justifyContent='space-around' sx={{gap:{sm:'122px' ,xs:"40px"},mt:{sm:'32px',xs:"20px"},justifyContent:'none'}}px="20px">
    //     <Link to='/'>
    //     <img src={Logo} alt='Logo' style={{
    //         margin:'0 20px' ,
    //         width:'58px',
    //         height:'58px',
    //         position:'relative',
    //         top:'10px',
    //     }}/>
    //     </Link>
    //     <Stack 
    //     direction='row'
    //     gap='40px'
    //     fontSize='24px'
    //     alignItems='flex-end'>

    //         <Link to='/' style={{
    //             textDecoration:'none',
    //             color:'#1C2258',
    //             borderBottom:'3px solid #0010A4'
    //         }}>Home</Link>

    //         <a href='#exercises' style={{
    //             textDecoration:'none',
    //             color:'#1C2258'
    //         }}>Exercises</a>

    //     </Stack>
    // </Stack>
<>
<CssBaseline/>
<AppBar
        position="static"
        color='transparent'
       // style={{backgroundColor:'black'}}
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
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
            <Link
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
            </Link>
            {/* <Link
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

            <Link
              variant="button"
              color="text.primary"
              href="#"
              to='/Register'
              sx={{ my: 1, mx: 1.5 }}
              style={{
                marginLeft:'15px',
                textDecoration:'none',
                color:'#3A1212',
              }}
            >
              Sing up
            </Link> */}
            
          </nav>
          
          <Button   href="/"variant="contained" sx={{ my: 1, mx: 1.5 }}
          style={{backgroundColor:'#ff2625'}}>
           <Logout/>
          </Button>
        </Toolbar>
      </AppBar>
</>



  )
}

export default Navbar