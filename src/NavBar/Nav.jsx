import { Outlet, Link } from "react-router-dom";

const options = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/shop">
          <button>Shop</button>
        </Link>
      </nav>

      <Outlet />
    </>
  );
};

export default options;
