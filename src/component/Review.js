import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { UserAuth } from '../context/UserAuth';



export default function Review({userData,setUserData}) {

  const {wh} = UserAuth();
 const Data = [
  {
    name: 'Chest Strength:',
    price: `${userData.chest}`,
  },
  {
    name: 'Shoulder Strength:',
    price: `${userData.shoulder}`,
  },
  {
    name: 'Back Strength:',
    price: `${userData.back}`,
  },
  {
    name: 'Legs Strength:',
    price: `${userData.legs}`,
  },
  {
    name: 'Training Experience:',
    price: `${userData.trainingExperience}`,
  },
  {
    name: 'Training Days:',
    price: `${userData.trainingDayes}`,
  },
  {
    name: 'Weight:',
    price: `${wh.weight}`,
  },
  {
    name: 'Height:',
    price: `${wh.height}`,
  },
  
]; 
    
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom fontSize={'25px'} color={'#3A1212'}>
        summary
      </Typography>
      <List disablePadding>
        

        {Data.map((Data) => (
          <ListItem  sx={{ py: 1, px: 0 }}>
            <ListItemText primary={Data.name} secondary={Data.desc} color={'#3A1212'}/>
            <Typography variant="body2" color={'#3A1212'}>{Data.price}</Typography>
          </ListItem>
        ))}
        

        {/* <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem> */}
      </List>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid> */}
        {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}