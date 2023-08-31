import styled from "styled-components";

import { themeColors } from "theme/colors";

export const WorkerExperienceItemContainer = styled.div<{ last?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-bottom: ${({ last }) => (last ? "none" : `1px solid ${themeColors.border.Gray}`)};
  margin-bottom: ${({ last }) => (last ? "0" : "16px")};
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
