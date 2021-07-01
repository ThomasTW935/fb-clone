import styled from "styled-components";

const SideNav = styled.section`
  display: none;
  padding: 1rem;
  padding-left: 0;
  flex: 1 0 30ch;
  @media (min-width: ${props=> props.theme.device.lg}) {
    display: block;
  }
`;

export {SideNav}
