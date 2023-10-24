
import React from 'react';
import { useWorkoutContext } from '../hookings/useWorkoutsContext';

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const {dispatch} = useWorkoutContext()

  const handleDelete = async () =>{
    const response = await fetch('/api/workouts/'+ workout._id,{
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok){
      dispatch({type : 'DELETE_WORKOUT' , payload :json})
    }
  }
  return (
    <div className="relative bg-slate-400  rounded-md shadow-lg p-6 mt-3 sm:mx-5 sm:my-5 sm:p-5">
    <div className="p-5 sm:p-10 ">
      <h2 className="font-bold m-1 text-green-400 text-xl cursor-pointer ">{workout.title}</h2>
      <div className="">
        <p className="text-gray-600">
          <strong>Load (kg):</strong> {workout.load}
        </p>
        <p className="text-gray-600">
          <strong>Reps:</strong> {workout.reps}
        </p>
      </div>
      <p className="text-gray-600 mt-1">
        <strong>Created:</strong> {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span
        onClick={handleDelete}
        className="absolute top-1 right-1 p-1 cursor-pointer bg-green-300 rounded-xl material-symbols-outlined hover:bg-green-400"
      >
        delete
      </span>
    </div>
  </div>
  

  );
};

export default WorkoutDetails;
