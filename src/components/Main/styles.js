import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 1.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 4rem 1rem;
  }

  @media screen and (max-width: 350px) {
    margin: 0;
    min-width: 17rem;
  }
`;

export const SectionContainer = styled.div`
  padding: 1.3rem 0;

  @media screen and (min-width: 768px) {
    padding-inline: 1rem;
    text-align: left;
  }
`;

export const Heading = styled.h1`
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: ${(props) => props.theme.white};

  @media screen and (min-width: 768px) {
    font-size: 3.1rem;
    line-height: 3.4rem;
  }
`;

export const Copy = styled.p`
  padding-block: 1.3rem;
  line-height: 1.6rem;
  color: ${(props) => props.theme.white};

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    padding-top: 1.7rem;
  }
`;

export const FormContainer = styled.div`
  padding: 1.6rem 0;

  @media screen and (min-width: 1000px) {
    min-width: 33.75rem;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  width: 100%;
  padding: 1.1rem 4rem;
  border-radius: 0.8rem;
  border-style: none;
  font-size: 0.95rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6rem;
  font-weight: 400;
  box-shadow: 0px 8px 1px rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
`;
export const Bold = styled.span`
  font-weight: 600;
`;
