import styled from 'styled-components';

const StyledHeaderWrapper = styled.div`
  padding: 80px;
  display: flex;
  justify-content: center;
`;

const StyledInnerContainer = styled.div`
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
`;

const StyledOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vw;
  @media (min-width: 600px){
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4vw;
  }
`;

const StyledSelect = styled.select``;

const StyledButton = styled.button`
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  padding: 15px;
  &:hover,
  &:active,
  &:focus {
    color: brown;
    text-decoration: underline;
  }
`;

const StyledSingleImageContainer = styled.div`
width: 100px;
height: 150px;
margin: 80px auto;
border: 10px solid #AC902C;
border-radius: 8px;
`;

export {
  StyledHeaderWrapper,
  StyledInnerContainer,
  StyledOptionsContainer,
  StyledSelect,
  StyledButton, 
  StyledSingleImageContainer
};
