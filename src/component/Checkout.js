import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StrengthBody from './StrengthBody';
import TrainingExperince from './TrainingExperince';
import Review from './Review';
import TrainingDays from './TrainingDays';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { UserAuth } from '../context/UserAuth';
import { useNavigate } from 'react-router-dom';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#3A1212',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#3A1212',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));
  
  const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#3A1212',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#3A1212',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));
  
  function QontoStepIcon(props) {
    const { active, completed, className } = props;
  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }
  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
  };

const steps = ['Body parts strength', 'Training Experince','Training Days','Review'];






const theme = createTheme();


export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [userData,setUserData] = React.useState([]);
    const [finaldata,setFinaldata] = React.useState([]);
    const navigate = useNavigate();
    const {uData,user,wh} = UserAuth();

    const handleSubmit= async (event)=>{
      event.preventDefault();

      try{
        await uData(user.email,wh.weight,wh.height,userData.legs,userData.back,userData.chest,userData.shoulder,userData.trainingDayes,userData.trainingExperience)
        navigate('/Home')
      }catch(event){
        console.log(event.message);
      }
        // setFinaldata(finaldata=>[...finaldata,userData]);
        // console.log({finaldata});
        // setFinaldata('');
        
    }

    function getStepContent(step) {
  switch (step) {
    case 0:
      return <StrengthBody userData={userData} setUserData={setUserData} user={user}/>;
    case 1:
      return <TrainingExperince userData={userData} setUserData={setUserData}/>;
    case 2:
      return <TrainingDays userData={userData} setUserData={setUserData}/>;
    case 3:
      return <Review userData={userData} setUserData={setUserData}/>;

    default:
      throw new Error('Unknown step');
  }
}


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4}}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Stepper  activeStep={activeStep} sx={{ pt: 3, pb: 5 , color:'' }} alternativeLabel connector={<QontoConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your time.
              </Typography>
              <Typography variant="subtitle1">
                .......
                {/* Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped. */}
              </Typography>
              <Button color='error' onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>

                  <Button variant="contained"
                  color='error' onClick={handleSubmit} sx={{ mt: 3, ml: 1 }}>
                    Submit
                  </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                {activeStep !== 0 && (
                  <Button color='error' onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  color='error'
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        
      </Container>
    </ThemeProvider>
  );
}