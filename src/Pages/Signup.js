import React from "react";
import { useState } from "react";
import Card from "../components/Card";
import useSignup from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, loading, error } = useSignup();

    const submitHandler = async (e) => {
        e.preventDefault();
        await signup(email, password);
    };

    return (
        <Card>
            <form className="signup" onSubmit={submitHandler}>
                <h2>Sign up</h2>
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
                    value={password}
                ></input>
                <button disabled={loading}>Sign up</button>
                {error && <div className="error">{error}</div>}
            </form>
        </Card>
    );
};

export default Signup;
