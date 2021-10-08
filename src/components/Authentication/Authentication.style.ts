import styled, { css, StyledComponentBase } from "styled-components"
import { Link } from "react-router-dom"

interface ICon extends StyledComponentBase<any, {}> {
  Form?: any
  Section?: any
  CTA?: any
  Link?: any
  Button?: any
  Guide?: any
}

const linkColor = "#7e6bf2"

const Con: ICon = styled.div`
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 3rem;
`

const form = styled.form`
  margin: 2.5rem 0 1rem;
`

const section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 1rem 0;
  input {
    border: 1px solid ${(props) => props.theme.palette.common.grey.normal};
    border-radius: 15px;
    padding: 0.4rem 0.75rem;
  }
`

const cta = styled.button`
  width: 100%;
  border-radius: 20px;
  background: ${(props) => props.theme.palette.primary.main};
  color: white;
  padding: 0.55rem;
  margin: 1rem 0 0;
  transition: 0.25s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`

const baseLink = css`
  text-decoration: none;
  background: none;
  color: ${linkColor};
  font-weight: bold;
`

const link = styled(Link)`
  ${baseLink}
`

const button = styled.button`
  ${baseLink}
`
const guide = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin: 0.5rem 0;
`

Con.Form = form
Con.Section = section
Con.CTA = cta
Con.Link = link
Con.Button = button
Con.Guide = guide

export default Con
