import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import SingleWorkout from "./Pages/SingleWorkout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path='/:id' element={<SingleWorkout />}/>
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
