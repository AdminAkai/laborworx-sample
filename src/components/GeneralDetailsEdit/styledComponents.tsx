import styled from "styled-components";

export const GeneralDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 104px);
  grid-template-areas:
    "input0 input1 input2"
    "input3 input4 input5"
    "input 6";
  min-height: 184px;
  width: 100%;
  margin-top: 24px;
`;
