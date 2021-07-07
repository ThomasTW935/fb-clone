import styled, { StyledComponentBase } from 'styled-components'

import { MainSideNav } from '../../core-ui/SideNav'
import ImgCon from '../../core-ui/image/Profile-Rounded'
import NewsFeed from './NewsFeed.style'
import List from '../../core-ui/List.style'
import baseMainStyle from '../../core-ui/Main'

interface IMain extends StyledComponentBase<any, {}> {
  SideNav?: any
  List?: any
  ImgCon?: any
  Head?: any
  NewsFeed?: any
}

const Main: IMain = styled.main`
  ${baseMainStyle}
`

const ContactHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  & div {
    display: flex;
    gap: 0.5rem;
  }
`

Main.SideNav = MainSideNav
Main.List = List
Main.ImgCon = ImgCon
Main.Head = ContactHead
Main.NewsFeed = NewsFeed

export default Main
