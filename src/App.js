import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import SingleWorkout from "./Pages/SingleWorkout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
    const { token } = useContext(AuthContext);
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                token ? <Home /> : <Navigate to="/login" />
                            }
                        />
                        <Route
                            path="/login"
                            element={!token ? <Login /> : <Navigate to="/" />}
                        />
                        <Route
                            path="/signup"
                            element={!token ? <Signup /> : <Navigate to="/" />}
                        />
                        <Route path="/:id" element={<SingleWorkout />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
