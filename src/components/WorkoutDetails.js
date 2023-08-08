import { NavLink } from "react-router-dom";
import { WorkoutsContext } from "../context/WorkoutContext";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const WorkoutDetails = ({ workout }) => {
    const workoutCtx = useContext(WorkoutsContext);
    const userCtx = useContext(AuthContext);

    const clickHandler = async () => {
        if (!userCtx.token) {
            return;
        }
        const response = await fetch(`/workouts/${workout._id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + userCtx.token,
            },
        });

        if (response.ok) {
            workoutCtx.deleteWorkout(workout._id);
        }
    };

    return (
        <div className="workout-details">
            <NavLink to={`/${workout._id}`} style={{ color: "black" }}>
                <h4>{workout.title}</h4>
            </NavLink>
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
            <span className="material-symbols-outlined" onClick={clickHandler}>
                delete
            </span>
        </div>
    );
};

export default WorkoutDetails;
