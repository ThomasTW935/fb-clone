import styled, { StyledComponentBase } from 'styled-components'

interface IStats extends StyledComponentBase<any, {}> {
  Reactions?: any
  React?: any
  List?: any
}

const Stats: IStats = styled.div`
  display: flex;
  justify-content: space-between;
`

const reactions = styled.div`
  display: flex;
  align-items: center;
  & > span {
    margin-left: 0.5rem;
  }
`

const react = styled.div`
  position: relative;
  svg:hover ~ ul {
    display: flex;
  }
`

const list = styled.ul`
  display: none;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 0.75rem;
  gap: 0.3em;
  position: absolute;
  z-index: 9;
  background: #111;
  color: white;
  list-style: none;
  border-radius: 0.5em;
  padding: 0.6em 1rem;
  width: max-content;
  opacity: 0.8;
  span {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 0.8rem;
    padding-bottom: 0.3em;
  }
`

Stats.Reactions = reactions
Stats.React = react
Stats.List = list

export default Stats
