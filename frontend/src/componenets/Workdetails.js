
import React from 'react';
import { useWorkoutContext } from '../hookings/useWorkoutsContext';

// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

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
    <div className="relative bg-slate-400 rounded-md shadow-lg p-6 mt-3 sm:m-5 sm:px-10 sm:py-10 border border-gray-200">
  <div className="p-5 sm:p-10">
    <h2 className="font-bold text-lg text-green-400 cursor-pointer max-w-sm">
      {workout.title}
    </h2>
    <div className="text-gray-600 mt-3">
      <p><strong>Load (kg):</strong> {workout.load}</p>
      <p><strong>Reps:</strong> {workout.reps}</p>
    </div>
    <p className="text-gray-600 mt-1">
  <strong>Created:</strong>
  <span className="overflow-hidden">{new Date(workout.createdAt).toLocaleDateString()}</span>
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




//<p className="text-gray-600 mt-1">
 // <strong>Created:</strong>
 /// <span className="overflow-hidden">{new Date(workout.createdAt).toLocaleDateString()}</span>
  //  </p> */}

//     <div className="flex flex-wrap">
//   <div className="w-full sm:w-1/2 px-3">
//     <h2 className="font-bold text-green-400 cursor-pointer max-w-sm">
//       {workout.title}
//     </h2>
//   </div>
//   <div className="w-full sm:w-1/2 px-3">
//     <div className="text-gray-600">
//       <p><strong>Load (kg):</strong> {workout.load}</p>
//       <p><strong>Reps:</strong> {workout.reps}</p>
//     </div>
//    <p className="text-gray-600 mt-1">
//   <strong>Created:</strong>
//   <span className="overflow-hidden">{new Date(workout.createdAt).toLocaleDateString()}</span>
//     </p> 
//     <span
//       onClick={handleDelete}
//       className="absolute top-1 right-1 p-1 cursor-pointer bg-green-300 rounded-xl material-symbols-outlined hover:bg-green-400"
//     >
//       delete
//     </span>
//   </div>
// </div>

   