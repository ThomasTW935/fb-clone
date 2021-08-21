import styled, { StyledComponentBase } from 'styled-components'

interface IFooter extends StyledComponentBase<any, {}> {
  Actions?: any
  Reactions?: any
  Button?: any
}

const Footer: IFooter = styled.section``

const reactions = styled.div`
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
`

const button = styled.button`
  width: 100%;
  background: none;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: ${(props) => props.theme.palette.common.grey.lighter};
  }
`

Footer.Actions = actions
Footer.Reactions = reactions
Footer.Button = button

export default Footer
