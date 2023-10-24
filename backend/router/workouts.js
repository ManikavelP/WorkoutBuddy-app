const express = require("express");


//workoutController.js
const  { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controller/workController');

//get the router from express
const router = express.Router()

//get all the workouts
router.get('/' ,getWorkouts);


// get a single workout
router.get('/:id' ,getWorkout);


//post or create a new workout
router.post('/' ,createWorkout);


// delete a workout using id
router.delete('/:id' ,deleteWorkout);


// update a workout using id
router.patch('/:id' ,updateWorkout);


//exporting a whole routers
module.exports = router;