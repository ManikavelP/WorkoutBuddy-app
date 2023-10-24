import { useState } from "react";
import { useWorkoutContext } from "../hookings/useWorkoutsContext";

const WorkoutForm = () => {
  const {dispatch} = useWorkoutContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, load, reps };
    console.log('Workout data:', workout);
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log('Server response:', json);

    if (!response.ok) {
      setError(json.error)
    
    }
    if (response.ok) {
      setTitle("")
      setLoad("")
      setReps("")
      setError(null)
      console.log("new Workout added" , json)
      dispatch({type : 'CREATE_WORKOUT',payload:json})
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md sm:p-10 p-5  sm:max-w-md">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Add a New Workout</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">
            Workout Exercise Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg border-gray-300"
            required
            
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">Load (in kg):</label>
          <input
            type="number"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg border-gray-300"
            required
            
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">Reps:</label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg border-gray-300"
            required
            
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
          required
        >
          Add Workout
        </button>
      </form>
      <p>{error && <div className="text-red-500 mt-3">{error}</div>}</p>
    </div>
  );
};

export default WorkoutForm;