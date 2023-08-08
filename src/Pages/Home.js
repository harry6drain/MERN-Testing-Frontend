import { useContext, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { WorkoutsContext } from "../context/WorkoutContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const ctx = useContext(WorkoutsContext);
    const userCtx = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch(`/workouts`, {
                headers: {
                    Authorization: "Bearer " + userCtx.token,
                },
            });
            const data = await response.json();
            if (response.ok) {
                ctx.setWorkouts(data);
            }
        };
        if (userCtx.token) {
            fetchWorkouts();
        }
        
        // eslint-disable-next-line
    }, [ctx.workouts.length, userCtx.token,navigate]);

    

    return (
        <div className="pages">
            <div className="home">
                <div className="workouts">
                    {ctx.workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))}
                </div>
                <WorkoutForm />
            </div>
        </div>
    );
};

export default Home;
