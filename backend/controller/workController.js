const mongoose  = require("mongoose");
const Workout = require("../models/workoutModel")


//get all workouts
const getWorkouts = async (req,res) =>{
  const workouts  = await Workout.find({}).sort({createdAt : -1});
  res.status(200).json(workouts);
}


//get a single workout using id
const getWorkout = async(req,res) =>{
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"No such Workouts for the given id"})
  }

  const workout = await Workout.findById(id) ;
  if(!workout){
    return res.status(404).json({error: "No such id found"})
  }
  //else return workout
  res.status(200).json(workout);
}



//post a workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}




// update a workout using id
const updateWorkout = async(req,res) =>{
  const { id } = req.params;

  //check the id is valid 
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"No such Workouts for the given id"})
  }
  //obtain the workouts 
  const workout = await Workout.findByIdAndUpdate({_id : id},{
    ...req.body
  });

  //if workout is not there then return "not found"
  if(!workout){
    return res.status(404).json({error: "No such id found"})
  }
  //else update the workout and return
  res.status(200).json(workout);
}



//delete a workout using id

const deleteWorkout = async(req,res) =>{
  const { id } = req.params;

  // check the id is valid 
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"No such Workouts for the given id"})
  }

  //compare and get the workout
  const workout = await Workout.findOneAndDelete({_id : id});

  //if its not there then return "not found"
  if(!workout){
    return res.status(404).json({error: "No such id found"})
  }
  //else delete and send 
  res.status(200).json(workout);
}

// all the modules are exported to workouts.js
module.exports = {
  createWorkout ,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
}