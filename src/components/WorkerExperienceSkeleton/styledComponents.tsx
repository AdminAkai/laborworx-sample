import styled from "styled-components";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

const flexDefault = `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const WorkerExperienceContainer = styled.div`
  ${flexDefault}
  height: 100%;
  width: 30%;
  border-radius: 8px;
  padding: 32px;
  background-color: ${themeColors.background.White};
`;

export const SectionHeader = styled.span`
  ${textTheme.headings.h2.styledComponent}
`;

export const ItemsSection = styled.div`
  ${flexDefault}
  margin-top: 24px;
  width: 100%;
  margin-bottom: 40px;
`;
