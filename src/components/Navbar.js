import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <h1>
            <Link to="/">WorkOutBuddy </Link>
          </h1>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
