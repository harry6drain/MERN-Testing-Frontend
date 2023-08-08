import { Link, Outlet, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
    const { logout } = useLogout();
    const navigate = useNavigate();
    const userCtx = useContext(AuthContext);
    const clickHandler = () => {
        logout();
        navigate("/login");
    };
    const isLoggedIn = userCtx.token !== null
    return (
        <>
            <header>
                <div className="container">
                    <Link to="/">
                        <h1>WorkOutBuddy</h1>
                    </Link>
                    <nav>
                        {isLoggedIn && (
                            <div>
                                <button onClick={clickHandler}>Log out</button>
                            </div>
                        )}

                        {!isLoggedIn && (
                            <div>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                            </div>
                        )}
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Navbar;
