import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { WorkoutsContext } from "../context/WorkoutContext";

const SingleWorkout = () => {
    const ctx = useContext(WorkoutsContext);
    const { id } = useParams();
    const workout = ctx.workouts.filter((workout) => workout._id === id)[0];
    console.log(workout);
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
                {new Date(workout.createdAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })}
            </p>
        </div>
    );
};

export default SingleWorkout;
