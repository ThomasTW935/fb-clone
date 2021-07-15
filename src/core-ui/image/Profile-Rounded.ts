import styled, { css, StyledComponentBase } from 'styled-components'

interface IImgCon extends StyledComponentBase<any, {}> {
  Img?: any
}
interface IProps {
  isOnline?: boolean
}
interface IImage {
  src: string
  alt: string
  size: number
}

const greenBg = '#31A24C'

const ImgCon: IImgCon = styled.div<IProps>`
  ${(props): any =>
    props.isOnline &&
    css`
      position: relative;
      &::before {
        content: '';
        position: absolute;
        height: 0.8rem;
        width: 0.8rem;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        background-color: white;
      }
      &::after {
        content: '';
        position: absolute;
        height: 0.6rem;
        width: 0.6rem;
        bottom: 1px;
        right: 1px;
        border-radius: 50%;
        background-color: ${greenBg};
      }
    `}
`

const Image = styled.img<IImage>`
  font-size: ${(props) => (props.size ? `${props.size}px` : '16px')};
  min-width: 2em;
  width: 2em;
  height: 2em;
  border-radius: 50%;
`

ImgCon.Img = Image

export default ImgCon
