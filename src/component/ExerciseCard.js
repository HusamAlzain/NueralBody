import React, { lazy } from 'react'
import { Link } from 'react-router-dom'
import { Button , Stack, Typography } from '@mui/material'
import { textTransform } from '@mui/system'

function ExerciseCard({exercises}) {
  return (
    <Link className='exercise-card' to={`/exercise${exercises.id}`}>
        <img src={exercises.gifUrl} alt={exercises.name} loading='lazy'/>
        <Stack direction='row'>
         <Button sx={{ml:"21px",
          color:'#fff',
          background:'#ffa9a9',
          fontSize:'14px',
          borderRadius:'20px',
          textTransform:'capitalize'}}>
            {exercises.bodyPart}
         </Button>
         <Button sx={{ml:"21px",
          color:'#fff',
          background:'#fcc757',
          fontSize:'14px',
          borderRadius:'20px',
          textTransform:'capitalize'}}>
           {exercises.target}
         </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt="11px" pb='10px' textTransform='capitalize' fontSize='22px'>
            {exercises.name}
         </Typography>
        
    </Link>
  )
}

export default ExerciseCard