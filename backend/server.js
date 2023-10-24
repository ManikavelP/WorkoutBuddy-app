require("dotenv").config();
//express app
const express = require("express");
const app = express();
const cors = require("cors");

//mongoose
const mongoose = require("mongoose")

 
//modules
const workRoutes = require('./router/workouts');


//middleWare
app.use(express.json());
app.use((req,res,next) => {
  console.log(req.path , req.method);
  next();

})
app.use(
  cors({
    origin :[ " http:localhost:3000" ,"https://WorkoutBuddy-app.onrender.com"],
  })

);
//routes
app.use('/api/workouts', workRoutes)


//connect to db

mongoose.connect(process.env.MONG_URI)
    .then(()=>{
      app.listen(process.env.PORT,()=>{
        console.log("Connected to db & listening on port:", process.env.PORT)
      });

    })
    .catch((error)=>{
      console.log(error)
    })

// listen for request




