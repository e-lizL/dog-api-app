import { useState } from "react";
import Header from "./components/Header"
import OneDog from "./components/OneDog"
import Select from "./components/Select"
import ManyDogs from "./components/ManyDogs"
import {
  InnerContainer,
  OptionsContainer,
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
      <InnerContainer>
        
        <OptionsContainer>
          <Select data-test="breed-select" setBreedChoice={setBreedChoice}/>
          <StyledButton data-test="one-button" onClick={handleClick1}>Show me just one dog</StyledButton>
          <StyledButton data-test="many-button" onClick={handleClick2}>Show me all the dogs</StyledButton>  

          <OneDog breedChoice={breedChoice} showOneDog={showOneDog} />  
          <ManyDogs breedChoice={breedChoice} showManyDogs={showManyDogs} /> 
        </OptionsContainer>
      
      </InnerContainer>
    </>
  );
}
export default App;
