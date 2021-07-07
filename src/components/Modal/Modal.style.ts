import styled, { StyledComponentBase } from 'styled-components'
import { baseButtonStyle } from '../../core-ui/Button'

const width = 450
const height = 450

interface ICon extends StyledComponentBase<any, {}> {
  Form?: any
  Head?: any
  Body?: any
}

const Con: ICon = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(243, 243, 244, 0.5);
`

const form = styled.div`
  position: absolute;
  min-width: ${width}px;
  /* min-height: ${height}px; */
  top: 50%;
  left: 50%;
  padding: 1rem;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.palette.common.white};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
`
// Head

const head = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.palette.common.grey.light};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  p {
    font-size: 1.3rem;
    width: 100%;
    font-weight: bold;
    z-index: -1;
    position: absolute;
    text-align: center;
  }
  button {
    ${baseButtonStyle}
    border-radius: 50%;
    height: 40px;
    width: 40px;
    font-size: 1.5rem;
    margin-left: auto;
    background: ${(props) => props.theme.palette.common.grey.lighter};
    &:hover {
      background: ${(props) => props.theme.palette.common.grey.light};
    }
  }
`

// Body
const body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  textarea {
    min-height: 100px;
  }
  button {
    color: ${(props) => props.theme.palette.primary.text};
    background: ${(props) => props.theme.palette.primary.main};
    border-radius: ${(props) => props.theme.borderRadius};
    /* border-radius: 5px; */
    padding: 0.3rem;
    &:hover {
      background: ${(props) => props.theme.palette.primary.shadow};
    }
  }
`

Con.Form = form
Con.Head = head
Con.Body = body

export default Con
