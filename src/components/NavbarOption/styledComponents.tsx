import styled from "styled-components";

import { themeColors } from "theme/colors";

interface NavbarOptionContainerProps {
  $selected?: boolean;
  last?: boolean;
}

export const NavbarOptionContainer = styled.div<NavbarOptionContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  width: 205px;
  height: 48px;
  margin-right: ${({ last }) => !last && "40px"};
  background-color: ${({ $selected }) =>
    $selected ? themeColors.background.Primary : "transparent"};

  &:hover {
    background-color: ${themeColors.background.Primary};
  }
`;
