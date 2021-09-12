import styled, { StyledComponentBase, css } from 'styled-components'

interface ICon extends StyledComponentBase<any, {}> {
  Bar?: any
  Input?: any
  Icon?: any
}

interface IProps {
  isFocus: boolean
}

const Con: ICon = styled.section<IProps>`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  height: 100%;
  ${(props) =>
    props.isFocus &&
    css`
      position: absolute;
      background: white;
      min-width: 3ch;
    `}
`

const bar = styled.div`
  border-radius: 50%;
  padding: 0.5em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transform-origin: right;
  transition: transform 0.3s ease;
  @media only screen and (min-width: ${(props) => props.theme.device.md}) {
    background: ${(props) => props.theme.palette.common.grey.lighter};
    border-radius: 1.5rem;
  }
`
const iconSize = 32
const icon = styled.button<IProps>`
  display: ${(props) => (props.isFocus ? 'none' : 'grid')};
  place-content: center;
  border-radius: 50%;
  border: none;
  padding: ${(props) => (props.isFocus ? '.5em' : '0')};
  @media only screen and (max-width: ${(props) => props.theme.device.md}) {
    width: ${iconSize}px;
    height: ${iconSize}px;
    background: ${(props) => props.theme.palette.common.grey.normal};
  }
`
const input = styled.input<IProps>`
  display: ${(props) => (props.isFocus ? 'grid' : 'none')};
  outline: none;
  border: none;
  background: transparent;
  margin-left: 0.2rem;
  @media only screen and (min-width: ${(props) => props.theme.device.lg}) {
    display: block;
  }
`

Con.Bar = bar
Con.Input = input
Con.Icon = icon

export default Con
