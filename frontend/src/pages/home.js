
import { useEffect } from "react";

import WorkoutForm from "../componenets/WorkoutForm";
import { useWorkoutContext } from "../hookings/useWorkoutsContext";
import WorkoutDetails from "../componenets/Workdetails";

const Home = () => {
 const {workouts,dispatch} = useWorkoutContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS' , payload : json});
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="flex flex-col sm:flex-row  w-full mt-12 pt-5 ">
    <div className="flex-1 flex flex-wrap sm:justify-start justify-center sm:mt-4 m-5 sm:ml-6">
      {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
    </div>
    <div className="w-full sm:w-1/3 sm:mx-5  sm:my-8">
      <WorkoutForm />
    </div>
  </div>
  );
};

export default Home;
