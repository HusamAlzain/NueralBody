import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Stack } from '@mui/material';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/system';
import { muliStepContext } from './StepContext';


export default function StrengthBody({userData,setUserData}) {

    const [chest, setChest] = React.useState(5);
      const handleChangeChest = (event, newValue) => {
      if (typeof newValue === 'number') {
        setChest(newValue);
        setUserData(newValue);
      }
    }; 
    //--------------------------------------------
    const [shoulder, setShoulder] = React.useState(5);
      
    const handleChangeShoulder = (event, newValue) => {
      if (typeof newValue === 'number') {
        setShoulder(newValue);
        setUserData(newValue);
      }
    }; 
    //------------------------------------------
    const [back, setBack] = React.useState(5);
      
    const handleChangeBack = (event, newValue) => {
      if (typeof newValue === 'number') {
        setBack(newValue);
        setUserData(newValue);
      }
    }; 
    //-----------------------------------------
    const [legs, setLegs] = React.useState(5);
      
    const handleChangeLegs = (event, newValue) => {
      if (typeof newValue === 'number') {
        setLegs(newValue);
        setUserData(newValue);
      }
    }; 
  return (
    <React.Fragment >

      <Typography variant="h6" fontWeight={700} gutterBottom sx={{ color:"#3A1212"}}>
      Determine the strength of your body parts!
      </Typography>
      <Grid container spacing={3}>
    <Stack  mt='34px'  xs={12} sm={6} alignItems='center'  justifyContent='center' p='20px'>
         <Box position='relative' sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom >
      Chest Strength: {userData['chest']}
      </Typography>
      <Slider
        name='chest'
        color='error'
        value={userData['chest']}
        min={0}
        step={1}
        max={10}
        onChange={(e) => setUserData({...userData,'chest':e.target.value})}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        
      />
    </Box>
   </Stack>
    
        
   <Stack xs={12} sm={6} alignItems='center'  justifyContent='center' p='20px'>
         <Box position='relative' sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
      Shoulder Strength: {userData['shoulder']}
      </Typography>
      <Slider
        value={userData['shoulder']}
        color='error'
        min={0}
        step={1}
        max={10}
        onChange={(e) => setUserData({...userData,'shoulder':e.target.value})}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
   </Stack>

   <Stack  mt='5px'  xs={12} sm={6} alignItems='center'  justifyContent='center' p='20px'>
         <Box position='relative' sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
      Back Strength: {userData['back']}
      </Typography>
      <Slider
        value={userData['back']}
        color='error'
        min={0}
        step={1}
        max={10}
        onChange={(e) => setUserData({...userData,'back':e.target.value})}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
   </Stack>

    <Stack  mt='5px'  xs={12} sm={6} alignItems='center'  justifyContent='center' p='20px'>
         <Box position='relative' sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
      Legs Strength: {userData['legs']}
      </Typography>
      <Slider
        value={userData['legs']}
        color='error'
        min={0}
        step={1}
        max={10}
        onChange={(e) => setUserData({...userData,'legs':e.target.value})}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
   </Stack>

      </Grid>
    </React.Fragment>
  );
}