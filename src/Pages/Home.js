import { useContext, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { WorkoutsContext } from "../context/WorkoutContext";

const Home = () => {
    const ctx = useContext(WorkoutsContext);
    // const { workouts } = worktoutCtx;
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch(`/workouts`);
            const data = await response.json();
            if (response.ok) {
                ctx.setWorkouts(data);
            }
        };
        fetchWorkouts();
        // eslint-disable-next-line
    }, []);

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
