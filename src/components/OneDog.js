import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { StyledButton, StyledSingleImageContainer  } from ".././AppStyles";

const OneDog = () => {

  const randomDogUrl = "https://dog.ceo/api/breeds/image/random";
  const [randomDog, setRandomDog] = useState("");
  
  const fetchRequest = useCallback(() => {
    axios
      .get(randomDogUrl)
      .then((res) => setRandomDog(res.data))
      .catch((error) => console.log(error));
  }, []);

  return(
    <>
      <StyledButton onClick={fetchRequest}>
        Show me just one dog
      </StyledButton>

      <StyledSingleImageContainer>
        {randomDog &&
        <img src={randomDog.message} alt="random dog" width="100" height="150"/>
        }
      </StyledSingleImageContainer>
    </>
  )
}

export default OneDog;