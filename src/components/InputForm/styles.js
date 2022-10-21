import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 0.8rem;
  padding: 1.5rem 1.5rem 0.8rem;
  box-shadow: 0px 8px 1px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    padding: 2.6rem 2.6rem 1.8rem;
  }
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 100%;
  padding: 1.1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid
    ${(props) => (props.error ? props.theme.red : props.theme.green)};
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  box-sizing: border-box;

  &:invalid {
    border: 2px solid ${(props) => props.theme.red};
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
  padding: 0.3rem 1rem 0;
  line-height: 1.25rem;
`;

export const Terms = styled.span`
  color: ${(props) => props.theme.red};
  font-weight: 700;
`;
