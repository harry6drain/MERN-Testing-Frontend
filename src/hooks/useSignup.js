import { useState } from "react";
// import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
    const [error, setError] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    // const authctx = useContext(AuthContext);

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch("/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (!response.ok) {
            setError(data.error);
            setIsLoading(false);
            return;
        } else {
            setIsLoading(false);
            navigate("/login")
        }
    };
    return { signup, loading, error };
};

export default useSignup;
