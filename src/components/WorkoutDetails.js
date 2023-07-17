import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";


const WorkoutDetails = ({ workout }) => {
  const workoutCtx = useContext(WorkoutsContext);

  const clickHandler = async () => {
    const response = await fetch(
      `13.59.254.124/workouts/${workout._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      workoutCtx.deleteWorkout(workout._id);
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {workout.createdAt}
      </p>
      <span className="material-symbols-outlined" onClick={clickHandler}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;