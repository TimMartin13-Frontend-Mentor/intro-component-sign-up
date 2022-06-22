import styled from 'styled-components';

export const Text = styled.text`
  font-size: 11px; 
  text-align: center; 
  color: ${props => props.theme.white};
`

export const Link = styled.a` 
  color: ${props => props.theme.blue};
`