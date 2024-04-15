import { Outlet } from "react-router-dom";
import { Navigation, StyledLink, StyledButtonLink} from "./styled.js";

const options = () => {
  return (
    <>
      <Navigation>
        <StyledLink to="/">
          <StyledButtonLink>Home</StyledButtonLink>
        </StyledLink>

        <StyledLink to="/shop">
          <StyledButtonLink>Shop</StyledButtonLink>
        </StyledLink>
      </Navigation>

      <Outlet />
    </>
  );
};

export default options;
