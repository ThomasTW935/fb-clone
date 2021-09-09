import styled, { StyledComponentBase } from 'styled-components'

interface IFooter extends StyledComponentBase<any, {}> {
  Actions?: any
  Stats?: any
  Button?: any
  Reactions?: any
  React?: any
}

const Footer: IFooter = styled.section``

const stats = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const actions = styled.div`
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.palette.common.grey.lighter};
  border-top: 1px solid ${(props) => props.theme.palette.common.grey.lighter};
  padding: 0.3rem 0;
  margin-top: 0.3rem;
  div {
    position: relative;
    width: 100%;
    &:hover ul {
      transform: translate(-50%, 0);
      opacity: 1;
      visibility: visible;
    }
  }
`

interface IButton {
  isLiked: boolean
  bgColor: string
}
const button = styled.button<IButton>`
  width: 100%;
  background: none;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.bgColor};
  position: relative;
  text-transform: capitalize;
  &:hover {
    background: ${(props) => props.theme.palette.common.grey.lighter};
  }
`

interface IReactions {
  hovered: boolean
}
const reactions = styled.ul<IReactions>`
  display: flex;
  opacity: 0;
  visibility: hidden;
  list-style: none;
  gap: 0.6rem;
  padding: 0.6rem;
  position: absolute;
  bottom: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, 50%);
  transition: all 0.3s 1s ease;
  background: white;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 2rem;
`

interface IReact {
  bgColor: string
}
const react = styled.li<IReact>`
  font-size: 1.5rem;
  background: ${(props) => props.bgColor};
  border-radius: 50%;
  padding: 0.3em;
  display: grid;
  place-content: center;
  cursor: pointer;
  position: relative;
  &:hover {
    transition: transform 0.1s ease-in-out;
    transform: scale(1.2);
    transform-origin: bottom;
    span {
      display: block;
    }
  }
  span {
    display: none;
    position: absolute;
    bottom: 105%;
    left: 50%;
    transform: translateX(-50%);
    text-transform: capitalize;
    font-size: 0.75rem;
    background: #111;
    color: white;
    border-radius: 1rem;
    padding: 0 0.3rem;
  }
`

Footer.Actions = actions
Footer.Stats = stats
Footer.Button = button
Footer.Reactions = reactions
Footer.React = react

export default Footer
