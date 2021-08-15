import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface IProps {
  isactive: boolean
}

const baseButtonStyle = css`
  background: none;
  display: grid;
  place-content: center;
  width: 2.5em;
  height: 2.5em;
  border-radius: 5px;
  cursor: ponter;
`
const PrimaryTab = styled(Link)<IProps>`
  ${baseButtonStyle}
  font-size: 1.2rem;
  height: 100%;
  width: 100%;
  position: relative;
  color: ${(props) =>
    props.isactive
      ? props.theme.palette.primary.main
      : props.theme.palette.common.grey.normal};
  &:hover {
    background: ${(props) =>
      props.isactive ? '' : props.theme.palette.common.grey.light};
  }
  &:before {
    content: '';
    position: absolute;
    border-bottom: 2px solid ${(props) => props.theme.palette.primary.main};
    transition: 0.3s ease-in-out;
    /* transform: scaleY(0); */
    transform-origin: bottom;
    top: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    transform: ${(props) => (props.isactive ? 'scaleY(1)' : `scaleY(0)`)};
  }
`

const SecondaryTab = styled.button<IProps>`
  font-size: 0.85rem;
  min-width: 2.5em;
  ${baseButtonStyle}
  color: ${(props) =>
    props.isactive
      ? props.theme.palette.primary.main
      : `props.theme.palette.common.black`};
  border-radius: 50%;
  background: ${(props) => props.theme.palette.common.grey.lighter};
  &:hover {
    background: ${(props) => props.theme.palette.common.grey.light};
  }
`

export { PrimaryTab, SecondaryTab, baseButtonStyle }
