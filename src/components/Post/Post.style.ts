import styled, { StyledComponentBase } from 'styled-components'
import ImgCon from '../../core-ui/image/Profile-Rounded'
import baseListStyle from '../../core-ui/List.style'
interface ICon extends StyledComponentBase<any, {}> {
  Head?: any
  Body?: any
  ImgCon?: any
  Actions?: any
  List?: any
}

const Con: ICon = styled.div`
  background: white;
  margin: 1rem;
  border-radius: 10px;
  padding: 0.5rem 0;
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > section {
    padding: 0 1rem;
  }
`

const head = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & > section {
    width: 100%;
    div {
      font-size: 0.7rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }
`
const actions = styled.section`
  display: flex;
  justify-content: right;
  position: relative;
  width: 100%;
  button {
    border-radius: 50%;
    background: none;
    &:hover {
      background: ${(props) => props.theme.palette.common.grey.lighter};
    }
  }
`
const list = styled(baseListStyle)`
  position: absolute;
  z-index: 2;
  top: 100%;
  padding: 1rem 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.palette.common.white};
  box-shadow: ${(props) => props.theme.boxShadow};
  li {
    width: 100%;
    &:hover {
      background: ${(props) => props.theme.palette.common.grey.lighter};
    }
  }
`

const body = styled.div`
  padding: 0;
  p {
    padding: 0 1rem 0.5rem;
  }
`

Con.Head = head
Con.Actions = actions
Con.Body = body
Con.ImgCon = ImgCon
Con.List = list

export default Con
