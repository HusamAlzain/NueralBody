import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/system';


  

 
    

export default function TrainingExperince({userData,setUserData}) {
    const [trainingExperience, setTrainingExperience] = React.useState('0-1');
    // const handleChange = (event, newAlignment) => {
    //   setTrainingExperience(newAlignment);
    //   };
        console.log({userData})
  return (
    <React.Fragment>
        <Box alignItems='center' position='relative' left='220px'>
        <Typography variant="h6"  fontWeight={700} gutterBottom position='relative' left='-140px' mb='20px' sx={{ color:"#3A1212"}}>
        How many years of training experience?
      </Typography>
      <Grid container spacing={3}>
        <ToggleButtonGroup
      value={userData['trainingExperience']}
      exclusive
      color='error'
      orientation="vertical"
      onChange={(e) => setUserData({...userData,'trainingExperience':e.target.value})}
      aria-label="Platform"
      size="large" 
      item xs={12} md={6}
      sx={{
        position:'relative',
        mt:'20px',
        pl:{lg:'20px',xs:'0px'},
        left:{lg:'0px',xs:'-30px'},
        color:'error'
      }}
    >
      {/* <ToggleButton value="beginners">0-1</ToggleButton>
      <ToggleButton value="mediocre">2-3</ToggleButton>
      <ToggleButton value="advanced">4-5</ToggleButton> */}
      <ToggleButton value="0-1">0-1</ToggleButton>
      <ToggleButton value="2-3">2-3</ToggleButton>
      <ToggleButton value="4-5">4-5</ToggleButton>
    </ToggleButtonGroup>

      </Grid>
        </Box>

    </React.Fragment>
  );
}