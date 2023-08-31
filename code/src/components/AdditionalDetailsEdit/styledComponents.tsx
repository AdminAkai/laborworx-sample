import styled from "styled-components";

export const AdditionalDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "input0 input1"
    "input2 input3";
  min-height: 184px;
  width: 100%;
  margin-top: 24px;
`;
