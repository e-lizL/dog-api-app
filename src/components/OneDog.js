import axios, { AxiosHeaders } from "axios";
import { useState, useEffect, useCallback } from "react";
import {StyledSingleImageContainer  } from ".././AppStyles";

const OneDog = ({ breedChoice, showOneDog }) => {

  const singleDogUrl = `https://dog.ceo/api/breed/${breedChoice}/images/random`;
  const [dog, setDog] = useState("");
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(singleDogUrl);
      setDog(data.message);
    }
    getData();
  }, [singleDogUrl] )

  return(
    <>
      <StyledSingleImageContainer>
        {showOneDog &&
        <img src={dog.message} alt="one dog" />
        }
      </StyledSingleImageContainer>
    </>
  )
}

export default OneDog;