import styled, { StyledComponentBase } from 'styled-components'
import ImgCon from '../../core-ui/image/Profile-Rounded'
import List from '../../core-ui/List.style'
import { PrimaryTab, SecondaryTab } from '../../core-ui/Button'
import { baseSideNav } from '../../core-ui/SideNav'

interface INavBar extends StyledComponentBase<any, {}> {
  Left?: any
  Middle?: any
  Right?: any
  List?: any
  ImgCon?: any
  SecondaryTab?: any
  PrimaryTab?: any
}

const Nav: INavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background: white;
  & > section {
    align-items: center;
    gap: 0.5rem;
  }
`

const LeftSide = styled.section`
  ${baseSideNav}
  display: flex;
`
const MiddleSide = styled.section`
  display: none;
  max-width: 90ch;
  justify-content: space-between;
  width: 100%;
  @media only screen and (min-width: ${(props) => props.theme.device.md}) {
    display: flex;
  }
`
const RightSide = styled.section`
  ${baseSideNav}
  display: flex;
  justify-content: end;
`

Nav.Left = LeftSide
Nav.Middle = MiddleSide
Nav.Right = RightSide
Nav.List = List
Nav.ImgCon = ImgCon
Nav.SecondaryTab = SecondaryTab
Nav.PrimaryTab = PrimaryTab

export default Nav
