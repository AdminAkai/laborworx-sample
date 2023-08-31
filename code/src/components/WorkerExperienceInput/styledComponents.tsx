import styled from "styled-components";

export const iconButtonSx = {
  gridArea: "trashIcon",
  justifySelf: "end",
  alignSelf: "center",
  marginTop: "19px"
};

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) 0.1fr;
  grid-template-areas: "input0 input1 input2 input3 trashIcon";
  grid-template-rows: auto;
  width: 100%;
  margin-top: 24px;
`;
