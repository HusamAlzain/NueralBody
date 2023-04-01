import React,{useState,useEffect} from 'react'
import {Box, Card, CardContent, CardMedia, Container, Grid, Typography,CardActionArea,CardActions,Button}from '@mui/material';
import { flexbox } from '@mui/system';
import axios from 'axios';
import HeroBanner from '../component/HeroBanner';
import SearchExercises from '../component/SearchExercises';
import ExerciseDetsil from './ExerciseDetsil';
import Exercises from '../component/Exercises';


function Home() {
    const [bodypart,setBodyPart]= useState('all')
    const [exercises,setExercises]= useState([])

  return (
    <Box>
    <HeroBanner/>
    <SearchExercises
    setExercises={setExercises}
    bodypart={bodypart}
    setBodyPart={setBodyPart}
    />
    <Exercises
    exercises={exercises}
    setExercises={setExercises}
    bodypart={bodypart}
    />
    </Box>

     
)}

export default Home