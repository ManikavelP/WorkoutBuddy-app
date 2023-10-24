const mongoose = require("mongoose")

const Scheme = mongoose.Schema

const WorkOutSchema = new Scheme({
  title :{
    type :String,
    required:true
  },
  reps :{
    type :Number,
    required:true
  },
  load :{
    type :String,
    required:true
  }
  
},{timestamps:true});

module.exports = mongoose.model("Workouts",WorkOutSchema);