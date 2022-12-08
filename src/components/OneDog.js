import axios from "axios";
import { useState, useEffect } from "react";
import { StyledSingleImageWrapper } from ".././AppStyles";

const OneDog = ({ breedChoice, showOneDog }) => {

  const singleDogUrl = `https://dog.ceo/api/breed/${breedChoice}/images/random`;
  const [dog, setDog] = useState("");
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(singleDogUrl)
        .catch(err => console.log(err));
      setDog(data.message);
    }
    getData();
  }, [singleDogUrl] )

  return(
    <>
      <StyledSingleImageWrapper>
        {showOneDog &&
        <img src={dog} data-test="one-dog" alt="one dog" />
        }
      </StyledSingleImageWrapper>
    </>
  )
}

export default OneDog;