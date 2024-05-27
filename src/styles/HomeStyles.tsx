import styled from "styled-components";
import { ModeProps } from "../types/ModePropTypes";

export const Box = styled.div<ModeProps>`
  height: 100vh;
  background-color: ${(props) => (props.$mode ? "#202C36" : "#fafafa")};
`;
