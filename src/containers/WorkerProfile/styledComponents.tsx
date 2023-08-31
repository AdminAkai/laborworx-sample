import styled from "styled-components";
import { themeColors } from "theme/colors";

export const WorkerProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100%;
  width: 100%;
  background-color: ${themeColors.background.Primary};
`;
