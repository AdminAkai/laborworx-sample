import styled from "styled-components";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

const workerDetailsCss = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WorkerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-width: 20%;
  border-radius: 8px;
  padding: 32px;
  background-color: ${themeColors.background.White};
`;

export const MainDetails = styled.div`
  ${workerDetailsCss}
  flex-direction: column;
  width: 100%;
`;

export const AddressSection = styled.div`
  ${workerDetailsCss}
  width: 240px;
  height: 58px;
  margin-top: 12px;
`;

export const AddressBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  background-color: ${themeColors.background.Primary};
  padding: 8px;
  border-radius: 8px;
  text-align: left;
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  align-items: flex-start;
`;

export const SectionHeader = styled.span`
  ${textTheme.headings.h2.styledComponent};
  color: ${themeColors.text.Black};
  margin-top: 40px;
`;

export const SkillSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
