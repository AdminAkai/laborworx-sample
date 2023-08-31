import styled from "styled-components";

import { themeColors } from "theme/colors";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 75px;
  border-bottom: solid 1px ${themeColors.border.Gray};
`;

export const NavbarLeftSector = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

export const NavbarRightSector = styled(NavbarLeftSector)`
  justify-content: flex-end;
`;
