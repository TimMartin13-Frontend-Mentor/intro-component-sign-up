import React from "react";
import { MainContainer, SectionContainer, Heading, Copy, FormContainer, Button, Bold } from './styles';

const Main = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <Heading>Learn to code by watching others</Heading>
        <Copy>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</Copy>
      </SectionContainer> 
      <FormContainer>
        <Button><Bold>Try it free 7 days</Bold> then $20/mo. thereafter</Button>
        {/* <Form /> */}
      </FormContainer>
    </MainContainer>
  )
}

export default Main;