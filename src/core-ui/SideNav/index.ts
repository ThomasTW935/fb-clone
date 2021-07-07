import styled, { css } from 'styled-components'
import { SIZE } from '../../helper/enum'

interface IProps {
  size: SIZE
}

const baseSideNav = css`
  padding-left: 0;
  min-width: 30ch;
  width: 100%;
  flex: 1 0 30ch;
`

const MainSideNav = styled.section<IProps>`
  ${baseSideNav}
  /* padding: 1rem; */
  display: none;
  @media (min-width: ${(props): any => {
      switch (props.size) {
        case SIZE.sm:
          return `${props.theme.device.sm}`
        case SIZE.md:
          return `${props.theme.device.md}`
        case SIZE.lg:
          return `${props.theme.device.lg}`
      }
    }}) {
    display: block;
  }
`

export { baseSideNav, MainSideNav }
