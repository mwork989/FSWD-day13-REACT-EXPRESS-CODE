import { Link, Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      {/* <ul>
        <li>
          <Link  to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About">
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/es6app">
          es6app
          </Link>
        </li>
        <li>
          <Link to="/foodapp">
          foodapp
          </Link>
        </li>
      </ul> */}
      <Navigation/>
      <Outlet />
    </div>
  );
};

export default Layout;
