import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 0.8rem;
  padding: 1.5rem 1.5rem 0.8rem;
  box-shadow: 0px 8px 1px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    padding: 2.6rem 2.6rem 1.8rem;
    min-width: 25.2rem;
  }
`;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.05rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  border: ${(props) => (props.error ? '3px' : '1px')} solid
    ${(props) => (props.error ? props.theme.red : props.theme.lightGrey)};
  border-radius: 0.4rem;
  margin-bottom: 1.1rem;
  box-sizing: border-box;
  color: ${(props) => (props.error ? props.theme.red : props.theme.darkBlue)};

  &::placeholder {
    color: ${(props) => (props.error ? props.theme.red : props.theme.darkBlue)};
  }
`;

export const Button = styled.button`
  text-transform: uppercase;
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  padding: 0.85rem;
  width: 100%;
  border-style: none;
  border-radius: 0.4rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  box-shadow: 0px 4px 1px rgba(48, 186, 127, 1);

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Disclaimer = styled.p`
  color: ${(props) => props.theme.grayishBlue};
  font-size: 0.7rem;
  padding: 0.8rem 1rem;
  line-height: 1.25rem;
`;

export const Terms = styled.span`
  color: ${(props) => props.theme.red};
  font-weight: 700;
`;
