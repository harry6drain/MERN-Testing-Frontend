import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setIsLoading] = useState(null);
    const authctx = useContext(AuthContext);
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch("/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (!response.ok) {
            setIsLoading(false);
            setError(data.error);
        }

        //if response.ok is true
        else {
            const { accessToken } = data;
            localStorage.setItem("user", accessToken);
            
            authctx.dispatch({ type: "LOGIN", payload: accessToken });
            setIsLoading(false);
            navigate("/");
        }
    };
    return { login, loading, error };
};

export default useLogin;
