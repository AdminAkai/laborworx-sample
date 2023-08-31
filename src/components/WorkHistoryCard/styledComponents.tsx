import styled from "styled-components";
import { themeColors } from "theme/colors";
import textTheme from "theme/text";

export const WorkHistoryCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${themeColors.background.White};
  border-radius: 8px;
  height: 150px;
  padding: 24px;
  margin-bottom: 16px;
`;

export const LeftSector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StatusRoleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActiveStatusBadge = styled.div<{ isActive?: boolean }>`
  background-color: ${({ isActive }) =>
    isActive ? themeColors.background.Green : themeColors.background.Red};
  color: ${({ isActive }) => (isActive ? themeColors.Green : themeColors.Red)};
  padding: 8px;
  border-radius: 8px;
  margin-right: 16px;
  ${textTheme.body.small.styledComponent};
`;

export const SubtitleOne = styled.div`
  ${textTheme.body.small.styledComponent};
  color: ${themeColors.Blue};
  margin-top: 8px;
  font-weight: 600;
`;

export const SubtitleTwo = styled(SubtitleOne)`
  color: ${themeColors.text.Black};
`;
