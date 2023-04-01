import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/system';

export default function AddressForm({userData,setUserData}) {
  
        const [alignmentt, setAlignmentt] = React.useState('three Days');
        const handleChange = (event, newAlignment) => {
            setAlignmentt(newAlignment);
          };

          console.log({userData})
    
  return (
    <React.Fragment>
        <Box alignItems='center' position='relative' left='220px'>
        <Typography variant="h6"  fontWeight={700} gutterBottom position='relative' left='-80px' mb='20px' sx={{ color:"#3A1212"}}>
        How many training days?
      </Typography>
      <Grid container spacing={3}>
       
        
        
        <ToggleButtonGroup
      
      value={userData['trainingDayes']}
      exclusive
      color='error'
      orientation="vertical"
      onChange={(e) => setUserData({...userData,'trainingDayes':e.target.value})}
      aria-label="Platform"
      size="large" 
      item xs={12} md={6}
      sx={{
        position:'relative',
        mt:'20px',
        pl:'20px',
        color:'error'
        
        
      }}

    >
      <ToggleButton value="three Days"sx={{padding:'10px 30px', fontSize:'15px'}}>3</ToggleButton>
      <ToggleButton value="four Days" sx={{padding:'10px 30px', fontSize:'15px'}}>4</ToggleButton>
      <ToggleButton value="five Days" sx={{padding:'10px 30px', fontSize:'15px'}}>5</ToggleButton>
      <ToggleButton value="six Days" sx={{padding:'10px 30px', fontSize:'15px'}}>6</ToggleButton>

    </ToggleButtonGroup>

      </Grid>
        </Box>

    </React.Fragment>
  );
}