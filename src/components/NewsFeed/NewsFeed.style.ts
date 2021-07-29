import styled, { StyledComponentBase } from 'styled-components'
import { baseButtonStyle } from '../../core-ui/Button'
import ImgCon from '../../core-ui/image/Profile-Rounded'

interface ICon extends StyledComponentBase<any, {}> {
  Head?: any
  Button?: any
  ImgCon?: any
}

const Con: ICon = styled.section`
  max-width: 90ch;
  width: 100%;
`

const head = styled.div`
  font-size: 1.1rem;
  background: white;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
  & > section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

const button = styled.button`
  ${baseButtonStyle}
  width: 100%;
  border-radius: 1.5rem;
  background: ${(props) => props.theme.palette.common.grey.lighter};
  color: ${(props) => props.theme.palette.common.grey.dark};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  &:hover {
    background: ${(props) => props.theme.palette.common.grey.light};
  }
`
Con.Head = head
Con.Button = button
Con.ImgCon = ImgCon

export default Con
