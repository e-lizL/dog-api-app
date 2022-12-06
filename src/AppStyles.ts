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
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
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

export {
  HeaderWrapper,
  InnerContainer,
  OptionsContainer,
  StyledSelect,
  StyledButton
};
