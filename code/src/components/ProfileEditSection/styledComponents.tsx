import styled from "styled-components";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

export const HeaderButtonSx = {
  backgroundColor: themeColors.Blue,
  textTransform: "none",
  padding: "12px 24px",
  ...textTheme.body.small.inlineStyle,
  fontWeight: 400,
  marginLeft: "24px"
};

export const Section = styled.div<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${themeColors.background.White};
  width: 100%;
  border-radius: 8px 2px 2px 8px;
  padding: 24px;
  border-right: ${({ isOpen }) =>
    isOpen ? `5px solid ${themeColors.background.White}` : `5px solid ${themeColors.Blue}`};
  transition: border-right 0.3s ease-in-out;
  margin-bottom: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CustomAccordion = styled.div<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0px")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;
