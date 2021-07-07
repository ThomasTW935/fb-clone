import styled, { css, StyledComponentBase } from 'styled-components'
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
  Profile?: any
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
const Profile = styled.div`
  position: relative;
  display: none;
  align-items: center;
  margin: 0 0.5rem;
  gap: 5px;
  border-radius: 1.5rem;
  padding: 0.45rem 1rem;
  padding-left: 2.3rem;
  background: ${(props) => props.theme.palette.common.grey.lighter};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.palette.common.grey.light};
  }
  @media only screen and (min-width: ${(props) => props.theme.device.md}) {
    display: flex;
  }

  & > div {
    position: absolute;
    left: 0;
  }
`

Nav.Left = LeftSide
Nav.Middle = MiddleSide
Nav.Right = RightSide
Nav.List = List
Nav.ImgCon = ImgCon
Nav.SecondaryTab = SecondaryTab
Nav.PrimaryTab = PrimaryTab
Nav.Profile = Profile

export default Nav
