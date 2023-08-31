import styled from "styled-components";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

export const SkillBadgeContainer = styled.div`
  background-color: ${themeColors.background.Primary};
  color: ${themeColors.Blue};
  ${textTheme.body.small.styledComponent};
  padding: 6px 12px;
  border-radius: 24px;
  margin-right: 10px;
  margin-top: 10px;
`;
