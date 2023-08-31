import styled from "styled-components";

import { themeColors } from "theme/colors";

export const MainSector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 25px 75px;
  background-color: ${themeColors.background.Primary};
`;
