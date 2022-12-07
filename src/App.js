import { useState } from "react";
import Header from "./components/Header"
import OneDog from "./components/OneDog"
import Select from "./components/Select"
import {
  StyledInnerContainer,
  StyledOptionsContainer,
  StyledButton
} from "./AppStyles";


function App() {
  const [breedChoice, setBreedChoice] = useState("hound");
  const [showOneDog, setShowOneDog] = useState(false);
  const [showManyDogs, setShowManyDogs] = useState(false);

  const handleClick1 = () => {
    setShowOneDog(true);
    setShowManyDogs(false);
  }

  const handleClick2 = () => {
    setShowManyDogs(true);
    setShowOneDog(false); 
  }

  return (
    <>
      <Header />
      <StyledInnerContainer>
        
        <StyledOptionsContainer>

          <Select setBreedChoice={setBreedChoice}>Show me my favourite breed</Select>
        
          <StyledButton onClick={handleClick1}>Show me just one dog</StyledButton>
          <StyledButton onClick={handleClick2}>Show me all the dogs</StyledButton>  

          <OneDog breedChoice={breedChoice} showOneDog={showOneDog} />  

        </StyledOptionsContainer>
      
      </StyledInnerContainer>
    </>
  );
}
export default App;
