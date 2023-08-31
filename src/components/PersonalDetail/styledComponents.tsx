import styled from "styled-components";

import { themeColors } from "theme/colors";

const personalDetailCss = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PersonalDetailItem = styled.div<{ marginTop?: string }>`
  ${personalDetailCss}
  margin-top: ${({ marginTop }) => marginTop || "16px"};
`;

export const DetailIcon = styled.div`
  ${personalDetailCss}
  width: 45px;
  height: 45px;
  background-color: ${themeColors.background.Primary};
  padding: 8px;
  border-radius: 8px;
  margin-right: 8px;
`;

export const PersonalDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;
