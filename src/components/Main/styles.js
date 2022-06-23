import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 1.5rem;
`

export const SectionContainer = styled.div`
  padding: 1.3rem 0;
`

export const Heading = styled.h1`
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: ${props => props.theme.white};
  `
  
  export const Copy = styled.p`
  line-height: 1.6rem;
  color: ${props => props.theme.white};
  `
  
  export const FormContainer = styled.div`
  padding: 1.6rem 0;
  `
  
  export const Button = styled.button`
  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  padding: 1.2rem 4rem;
  border-radius: 0.8rem;
  border-style: none;
  font-size: 0.95rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6rem;
  font-weight: 400;
  box-shadow: 0px 8px 1px rgba(0, 0, 0, 0.15);
`
export const Bold = styled.span`
  font-weight: 600;
`