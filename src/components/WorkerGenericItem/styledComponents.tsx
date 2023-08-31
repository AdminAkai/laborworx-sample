import styled from "styled-components";

import { themeColors } from "theme/colors";

export const WorkerGenericItemContainer = styled.div<{ last?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: ${({ last }) => (last ? "none" : `1px solid ${themeColors.border.Gray}`)};
  margin-bottom: ${({ last }) => (last ? "0" : "16px")};
`;
