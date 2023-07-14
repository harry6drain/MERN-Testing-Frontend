import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

const workoutReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_WORKOUT":
      return { workouts: [action.payload,...state.workouts] };
    case "SET_WORKOUTS":
      return { workouts: action.payload };
    case "DELETE_WORKOUT":
        return {workouts : state.workouts.filter(workout => workout._id !== action.id)}
    default:
      return state;
  }
};
 
export const WorkoutsContextProvider = (props) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: [],
  });

  const createWorkout = (newWorkout) => {
    dispatch({ type: "CREATE_WORKOUT", payload: newWorkout });
  };

  const setWorkouts = (workouts) => {
    dispatch({ type: "SET_WORKOUTS", payload: workouts });
  };

  const deleteWorkout = (id) => {
    dispatch({ type: "DELETE_WORKOUT", id})
  }

  const workoutObj = {workouts: state.workouts,createWorkout,setWorkouts,deleteWorkout}

  return <WorkoutsContext.Provider value={workoutObj}>{props.children}</WorkoutsContext.Provider>;
};
