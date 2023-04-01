import React,{useEffect,useState} from 'react';
import { Box, Stack, Typography,Grid,Card,CardMedia,CardContent,Container } from '@mui/material';
import axios from 'axios';
import { UserAuth } from '../context/UserAuth';

const HeroBanner = () => {
    const {user,wh} = UserAuth();    
    const [images,setimages] =useState( [] )
        useEffect (()=>{
            axios.get('js/data.json').then(res=>{setimages(res.data.portfolio)}) 
          },[])

const portfolioimages = images.map((images) =>{
    return(
                <Grid item key={images.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ maxWidth: 345}} style={{borderRadius:'20px'}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                        width:'100%',
                        height:'80%',
                    }}
                    image={images.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1,position: 'absolute',
                        color: 'rgba(255, 255, 255, 0.76)',
                        marginTop:'-130px',
                        transform: {lg:"translateX(50%)",sm:"translateX(60%)",xs:"translateX(60%)"},
                        fontSize:'22px' }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {images.title}
                    </Typography>
                    </CardContent>
                </Card>
              </Grid>

            )
}  )
    
    return (
        <main>
            <CardContent maxWidth='sm' 
            // sx={{bgcolor:'#12179A'}}
            >

            
   <Box
     sx={{
      //  bgcolor: '#12179A',
       pt: 20,
       pb: 1,
     }}
   >
     <Container maxWidth="sm">
       <Typography
         component="h1"
         variant="h2"
         fontWeight='400'
         align="center"
         color="#3A1212"
         gutterBottom
       >
         Unlimited Variety
       </Typography>
       <Typography variant="h5" align="center" color='#3A1212' paragraph>
        User name : {wh.name} <br/>
        User Email : {user && user.email} <br/>
       Never get bored. Get results with short & effective workouts you can do anywhere.
       </Typography>
     </Container>
   </Box>
   <Container sx={{ py: 2}} maxWidth="md">
     {/* End hero unit */}
     <Grid container spacing={1}>
       {portfolioimages}
       <Typography fontWeight={600} color='#ff2625' sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px',position:'relative',bottom:'100px' }}>
      Exercise
    </Typography>
     </Grid>
   </Container>
   </CardContent>
        </main>   
       )
       }

export default HeroBanner;