import { Outlet, Link } from "react-router-dom";
import { Navigation } from "./styleNav.js";

const options = () => {
  return (
    <>
      <Navigation>
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/shop">
          <button>Shop</button>
        </Link>
      </Navigation>

      <Outlet />
    </>
  );
};

export default options;
