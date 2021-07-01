import styled from "styled-components";
import {SIZE} from '../helper/enum'

interface IProps{
  size: SIZE
}

const Section = styled.section<IProps>`
  display: none;
  padding: 1rem;
  padding-left: 0;
  flex: 1 0 30ch;
  @media (min-width: ${props=> {
    switch(props.size){
      case SIZE.sm: return `${props.theme.device.sm}`;
      case SIZE.md: return `${props.theme.device.md}`; 
      case SIZE.lg: return `${props.theme.device.lg}`; 
    }
  }}) {
    display: block;
  }
  
`;

export default Section
