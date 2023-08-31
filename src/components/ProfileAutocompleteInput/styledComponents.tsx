import styled from "styled-components";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

export const AutocompleteInput = styled.div<{ detailNumber }>`
  grid-area: "input${({ detailNumber }) => detailNumber}";
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  padding-right: 24px;
`;

export const CustomSelectLabel = styled.label`
  color: ${themeColors.text.Gray};
  ${textTheme.body.small.styledComponent};
  margin-bottom: 8px;
  user-select: none;
`;

export const autocompleteSx = {
  "& .MuiInputBase-root": {
    padding: "8px 16px",
    borderRadius: "8px",
    minHeight: "54px",
    backgroundColor: themeColors.background.Primary,
    ...textTheme.body.medium.inlineStyle
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    border: "none"
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    outline: `${themeColors.Blue} solid 2px`,
    outlineOffset: "-2px"
  }
};

export const chipSx = {
  backgroundColor: themeColors.Blue,
  color: themeColors.background.White,
  marginRight: "24px",
  "& .MuiChip-deleteIcon": {
    color: themeColors.background.White
  }
};

export const textFieldSx = {
  input: {
    color: themeColors.text.Black,
    "&::placeholder": { opacity: 1 }
  }
};
