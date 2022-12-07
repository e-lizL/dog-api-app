import axios from "axios";
import { useState, useEffect } from "react";
import { StyledMultiImageContainer } from ".././AppStyles";


const ManyDogs = ({ showManyDogs, breedChoice }) => {

  const manyDogsUrl = `https://dog.ceo/api/breed/${breedChoice}/images`;
  const [dogs, setDogs] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(manyDogsUrl);
      setDogs(data.message);
    }
    getData();
  }, [manyDogsUrl] )

  return (
    <>
    <StyledMultiImageContainer>
      {showManyDogs &&
        dogs.map(url => <img key={url} src={url} alt="all dogs of a breed"/>)
      }
    </StyledMultiImageContainer>
    </>
  )
}

export default ManyDogs