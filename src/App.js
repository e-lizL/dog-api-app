import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header"
import OneDog from "./components/OneDog"
import {
  StyledInnerContainer,
  StyledOptionsContainer,
  StyledSelect,
  StyledButton
} from "./AppStyles";

function App() {
  const [breedChoice, setBreedChoice] = useState("hound");
  const [showOneDog, setShowOneDog] = useState(false);
  const [showManyDogs, setShowManyDogs] = useState(false);

  return (
    <>
      <Header />
      <StyledInnerContainer>
        
        <StyledOptionsContainer>

          <StyledButton>
          Show me just one dog
          </StyledButton>

          <OneDog showOneDog={showOneDog} breedChoice={breedChoice} />

          <StyledSelect>Show me my favourite breed</StyledSelect>
          
          <StyledButton>Show me all the dogs</StyledButton>  

        </StyledOptionsContainer>
      
      </StyledInnerContainer>
    </>
  );
}
export default App;
