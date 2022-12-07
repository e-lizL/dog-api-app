import header from ".././header.svg";
import { StyledHeaderWrapper } from ".././AppStyles";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <img src={header} alt="I love dogs" />
    </StyledHeaderWrapper>
  );
};

export default Header;
