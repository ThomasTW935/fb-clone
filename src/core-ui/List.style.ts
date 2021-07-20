import styled, { StyledComponentBase } from 'styled-components'

interface IBaseListStyle extends StyledComponentBase<any, {}> {
  Item?: any
}

const baseListStyle: IBaseListStyle = styled.ul``

const item = styled.li`
  display: flex;
  align-items: center;
  padding: 0.6rem;
  gap: 0.5rem;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.palette.common.grey.light};
  }
`
baseListStyle.Item = item
export default baseListStyle
