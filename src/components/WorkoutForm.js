import { useState, useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";
import { AuthContext } from "../context/AuthContext";

const WorkoutForm = () => {
    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState("");
    const [emptyFields, setEmptyFields] = useState([]);

    const workoutCtx = useContext(WorkoutsContext);
    const userCtx = useContext(AuthContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!userCtx.token) {
            setError("You must be logged in!");
        }

        const workout = { title, load, reps };
        const response = await fetch(`/workouts`, {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
                'Authorization': "Bearer " + userCtx.token,
            },
        });
        const data = await response.json();

        if (!response.ok) {
            setError(data.error);
            setEmptyFields(data.emptyFields);
        } else {
            setError(null);
            setTitle("");
            setLoad("");
            setReps("");
            setEmptyFields([]);
            // console.log("New workout added: ", data);
            workoutCtx.createWorkout(workout);
        }
    };

    return (
        <form className="create" onSubmit={submitHandler}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                value={title}
                className={emptyFields.includes("title") ? "error" : ""}
            ></input>

            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => {
                    setLoad(e.target.value);
                }}
                value={load}
                className={emptyFields.includes("load") ? "error" : ""}
            ></input>

            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => {
                    setReps(e.target.value);
                }}
                value={reps}
                className={emptyFields.includes("reps") ? "error" : ""}
            ></input>

            <button>Add Workoout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default WorkoutForm;
