import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header"
import OneDog from "./components/OneDog"
import {
  StyledInnerContainer,
  StyledOptionsContainer,
  StyledSelect,
  StyledButton
} from "./AppStyles";

function App() {

  return (
    <>
      <Header />
      <StyledInnerContainer>
        
        <StyledOptionsContainer>

          <OneDog />

          <StyledSelect>Show me my favourite breed</StyledSelect>
          
          <StyledButton>Show me all the dogs</StyledButton>  

        </StyledOptionsContainer>
      
      </StyledInnerContainer>
    </>
  );
}
export default App;
