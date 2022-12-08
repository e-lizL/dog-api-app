import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { 
StyledSelect, 
StyledSelectLabel,
StyledSelectWrapper } from ".././AppStyles";

const Select =({ setBreedChoice }) => {

  const allBreedsUrl = "https://dog.ceo/api/breeds/list/all";
  const [allBreedsData, setAllBreedsData] = useState({});
  const breedsArray = [];

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(allBreedsUrl)
        .catch(err => console.log(err));
      setAllBreedsData(data.message);
    }
    getData();
  }, []);

  (function pushBreedsArray() {
    for (let key in allBreedsData) {
      breedsArray.push(key)
    }
  }) ();


  return (
    <StyledSelectWrapper>

      <StyledSelectLabel>choose a breed:</StyledSelectLabel>
      
      <StyledSelect id="select" name="" onChange={(e) => setBreedChoice(e.target.value)}>
        {breedsArray.map(breed =>
          <option key={breed} value={breed}>{breed}</option>)}
      </StyledSelect>

    </StyledSelectWrapper>
  )
}

export default Select