import React from "react";
import styled from "styled-components";
import Header from "./Header.svg";

const HeaderWrapper = styled.div`
  padding: 80px;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const StyledSelect = styled.select``;

const StyledButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  &:hover,
  &:active,
  &:focus {
    color: blue;
  }
`;

function App() {
  return (
    <>
      <HeaderWrapper>
        <img src={Header} alt="I love dogs" />
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
