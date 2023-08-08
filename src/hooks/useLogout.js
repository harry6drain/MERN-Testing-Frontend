import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { WorkoutsContext } from "../context/WorkoutContext";

const useLogout = () => {
    const authctx = useContext(AuthContext);
    const wktCtx = useContext(WorkoutsContext);
    const logout = async () => {
        //update auth context
        authctx.dispatch({ type: "LOGOUT" });
        await fetch("/user/logout", {
            headers: { Authorization: "" },
        });
        localStorage.removeItem("user");

        wktCtx.setWorkouts([]);
    };
    return { logout };
};

export default useLogout;
