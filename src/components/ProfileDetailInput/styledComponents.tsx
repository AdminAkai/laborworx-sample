import styled from "styled-components";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

export const DetailInput = styled.div<{ detailNumber }>`
  grid-area: "input${({ detailNumber }) => detailNumber}";
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  padding-right: 24px;
`;

export const CustomInputLabel = styled.label<{ error?: boolean }>`
  color: ${({ error }) => (error ? themeColors.Red : themeColors.text.Gray)};
  ${textTheme.body.small.styledComponent};
  margin-bottom: 8px;
  user-select: none;
`;

export const CustomInput = styled.input<{ currency?: boolean }>`
  width: 100%;
  height: 54px;
  border-radius: 8px;
  background-color: ${themeColors.background.Primary};
  border: none;
  color: ${themeColors.text.Black};
  padding: 16px 16px 16px ${({ currency }) => (currency ? "20px" : "16px")};
  ${textTheme.body.medium.styledComponent};

  &:focus {
    outline: ${themeColors.Blue} solid 2px;
    outline-offset: -2px;
  }
`;

export const CustomAdornment = styled.span`
  user-select: none;
  position: absolute;
  left: 8px;
  top: 15px;
`;

export const UnitOfMeasurement = styled.span`
  user-select: none;
  position: absolute;
  left: 48px;
  top: 17px;
  ${textTheme.body.medium.styledComponent};
`;
