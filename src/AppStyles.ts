import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 80px;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const StyledSelectLabel = styled.label`
  font-size: 1.2rem;
  padding-left: 10px;
`;

const StyledSelect =  styled.select`
  height: 45px;
  padding: 0 20px;
  display: flex;
  font-size: 1.2rem;
`;

const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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

const StyledImagesContainer = styled.div`
  margin-top: 50px;
`;

const StyledSingleImageWrapper = styled.div`
  width: 98%;
  margin: 0 auto;
  img {
    margin: 0 auto;
  }
`;

const StyledMultiImageContainer = styled.div`
  width: 98%;
  margin: 0 auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  img {
    margin: 0 auto;
  }
`;


export {
  HeaderWrapper,
  InnerContainer,
  OptionsContainer,
  StyledSelect, 
  StyledSelectLabel,
  StyledSelectWrapper,
  StyledButton, 
  StyledImagesContainer,
  StyledSingleImageWrapper,
  StyledMultiImageContainer
  
};
