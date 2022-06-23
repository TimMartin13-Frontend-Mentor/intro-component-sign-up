import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${props => props.theme.white};
  border-radius: 0.8rem;
  padding: 1.5rem;
  `
  
export const Form = styled.form`
  
`
  
export const Input = styled.input`
  width: 87%;
  padding: 1rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid lightgrey;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
`
  
export const Button = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.white};
  padding: 1rem;
  width: 100%;
  border-style: none;
  border-radius: 0.4rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
`