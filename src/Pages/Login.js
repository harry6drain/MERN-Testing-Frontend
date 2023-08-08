import React from "react";
import { useState } from "react";
import Card from "../components/Card";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, loading, error } = useLogin();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <Card>
            <form className="signup" onSubmit={submitHandler}>
                <h2>Login</h2>
                <label>Email: </label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></input>
                <label>Password: </label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                ></input>
                <button disabled={loading}>Login</button>
                {error && <div className="error">{error}</div>}
            </form>
        </Card>
    );
};

export default Login;
