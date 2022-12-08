import header from ".././header.svg";
import { HeaderWrapper } from ".././AppStyles";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={header} alt="I love dogs" />
    </HeaderWrapper>
  );
};

export default Header;
