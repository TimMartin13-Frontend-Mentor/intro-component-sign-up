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
  padding: 1.3rem 0;
`