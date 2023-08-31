import styled from "styled-components";

import Button from "@mui/material/Button";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

export const HeaderButton = styled(Button)<{ $workerEditMode: boolean }>`
  && {
    background-color: ${({ $workerEditMode }) =>
      $workerEditMode ? themeColors.background.White : themeColors.Blue};
    text-transform: none;
    padding: 12px 24px;
    margin-left: 24px;
    color: ${({ $workerEditMode }) =>
      $workerEditMode ? themeColors.Blue : themeColors.background.White};
    ${textTheme.body.small.styledComponent};
    border-color: ${themeColors.Blue};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${themeColors.background.White};
  height: 100px;
  width: 100%;
  border-bottom: solid 1px ${themeColors.border.Gray};
  padding: 20px 75px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const HeaderLeftSector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  user-select: none;
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${textTheme.body.small.inlineStyle};
`;

export const HeaderRightSector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${textTheme.body.small.inlineStyle}
`;
