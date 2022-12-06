import header from "./header.svg";
import {
  HeaderWrapper,
  InnerContainer,
  OptionsContainer,
  StyledSelect,
  StyledButton,
} from "./AppStyles";

function App() {
  return (
    <>
      <HeaderWrapper>
        <img src={header} alt="I love dogs" />
      </HeaderWrapper>
      <InnerContainer>
        <OptionsContainer>
          <StyledSelect>Show me my favourite breed</StyledSelect>
          <StyledButton>Show me all the dogs</StyledButton>
          <StyledButton>Show me just one dog</StyledButton>
        </OptionsContainer>
      </InnerContainer>
    </>
  );
}
export default App;
