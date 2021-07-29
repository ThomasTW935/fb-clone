import styled, { StyledComponentBase } from 'styled-components'
import { Link } from 'react-router-dom'
import ImgCon from '../../core-ui/image/Profile-Rounded'

interface IProfile extends StyledComponentBase<any, {}> {
  ImgCon?: any
}

const Profile: IProfile = styled(Link)`
  position: relative;
  display: none;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  margin: 0 0.5rem;
  gap: 5px;
  border-radius: 1.5rem;
  padding: 0.45rem 1rem;
  padding-left: 2.3rem;
  background: ${(props) => props.theme.palette.common.grey.lighter};
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
Profile.ImgCon = ImgCon

export default Profile
