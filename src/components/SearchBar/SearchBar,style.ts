import styled, { StyledComponentBase } from 'styled-components'

interface ICon extends StyledComponentBase<any, {}> {
  Bar?: any
  Input?: any
  Icon?: any
}

interface IProps {
  focus: boolean
}

const Con: ICon = styled.section`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`

const bar = styled.div<IProps>`
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transform-origin: right;
  transform: ${(props) => (props.focus ? `scaleX(0.95)` : `scaleX(1)`)};
  transition: transform 0.3s ease;
  @media only screen and (min-width: ${(props) => props.theme.device.md}) {
    background: ${(props) => props.theme.palette.common.grey.lighter};
    border-radius: 1.5rem;
  }
`
const iconSize = 32
const icon = styled.span`
  cursor: pointer;
  display: grid;
  place-content: center;
  border-radius: 50%;
  @media only screen and (max-width: ${(props) => props.theme.device.md}) {
    width: ${iconSize}px;
    height: ${iconSize}px;
    background: ${(props) => props.theme.palette.common.grey.normal};
  }
`
const input = styled.input`
  display: none;
  outline: none;
  border: none;
  background: transparent;
  margin-left: 0.2rem;
  @media only screen and (min-width: ${(props) => props.theme.device.md}) {
    display: block;
  }
`

Con.Bar = bar
Con.Input = input
Con.Icon = icon

export default Con
