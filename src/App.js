import header from "./header.svg";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";

import {
  StyledHeaderWrapper,
  StyledInnerContainer,
  StyledOptionsContainer,
  StyledSelect,
  StyledButton,
  StyledSingleImageContainer
} from "./AppStyles";

function App() {
  const randomDogUrl = "https://dog.ceo/api/breeds/image/random";
  const [randomDog, setRandomDog] = useState("");

  const fetchRequest = useCallback(() => {
    axios
      .get(randomDogUrl)
      .then((res) => setRandomDog(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <StyledHeaderWrapper>
        <img src={header} alt="I love dogs" />
      </StyledHeaderWrapper>
      <StyledInnerContainer>
        <StyledOptionsContainer>
          <StyledSelect>Show me my favourite breed</StyledSelect>
          <StyledButton>Show me all the dogs</StyledButton>
          <StyledButton onClick={fetchRequest}>
            Show me just one dog
          </StyledButton>
        </StyledOptionsContainer>
        <StyledSingleImageContainer>
          {randomDog &&
          <img src={randomDog.message} alt="random dog" width="100" height="150"/>
          }
        </StyledSingleImageContainer>
      </StyledInnerContainer>
    </>
  );
}
export default App;
