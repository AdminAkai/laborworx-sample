import styled from "styled-components";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

export const tabSx = {
  marginRight: "12px",
  textTransform: "none",
  color: themeColors.text.Gray,
  ...textTheme.body.large.inlineStyle,
  "&.Mui-disabled": {
    color: themeColors.Blue
  }
};

export const WorkHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 40%;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export const WorkHistoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 24px;
`;
