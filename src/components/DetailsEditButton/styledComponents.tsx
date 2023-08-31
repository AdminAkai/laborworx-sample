import styled from "styled-components";

import { Button } from "@mui/material";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

export const SectionButton = styled(Button)`
  && {
    background-color: ${themeColors.background.White};
    text-transform: none;
    padding: 12px 24px;
    color: ${themeColors.Blue};
    ${textTheme.body.small.styledComponent};
    border-color: ${themeColors.Blue};
    width: 100%;
    border-radius: 4px;
    margin-top: 24px;
  }
`;
