import { createContext, useReducer, useEffect } from "react";
import useLogout from "../hooks/useLogout";
export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { token: action.payload };
        case "LOGOUT":
            return { token: null };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        token: null,
    });

    useEffect(() => {
        const token = localStorage.getItem("user");
        if (token) {
            dispatch({ type: "LOGIN", payload: token });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
