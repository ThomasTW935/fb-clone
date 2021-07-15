import styled, { StyledComponentBase } from 'styled-components'
import ImgCon from '../../core-ui/image/Profile-Rounded'

interface ICon extends StyledComponentBase<any, {}> {
  Head?: any
  Body?: any
  Footer?: any
  ImgCon?: any
}

const Con: ICon = styled.div`
  background: white;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
  & > section {
    margin-bottom: 0.5rem;
  }
`

const head = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  div {
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  button {
    margin-left: auto;
    justify-self: right;
  }
`
const body = styled.section``
const footer = styled.section``

Con.Head = head
Con.Body = body
Con.Footer = footer
Con.ImgCon = ImgCon

export default Con
