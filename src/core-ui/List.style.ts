import styled, { StyledComponentBase } from 'styled-components'

interface IList extends StyledComponentBase<any, {}> {
  Item?: any
}

const List: IList = styled.ul``

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.6rem;
  gap: 0.5rem;
  border-radius: 5px;
  text-transform: capitalize;
  &:hover {
    background: ${(props) => props.theme.palette.common.grey.normal};
  }
`

List.Item = ListItem

export default List
