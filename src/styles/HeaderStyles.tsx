import styled from "styled-components";
import { ModeProps } from "../types/ModePropTypes";

export const HeaderCon = styled.header<ModeProps>`
  padding: 1rem 3rem;
  box-shadow: 0px 2px 4px 0px #0000000e;
  background-color: ${(props) => (props.$mode ? "#2B3844" : "#ffffff")};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const HeaderBox = styled.div<ModeProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2 {
    font-size: 24px;
    font-weight: 800;
    color: ${(props) => (props.$mode ? "#FFFFFF" : "#111517")};
    transition: color 0.3s ease;
  }

  @media (max-width: 450px) {
    & h2 {
      font-size: 14px;
    }
  }
`;

export const ModeBox = styled.div<ModeProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  & p {
    font-weight: 600;
    color: ${(props) => (props.$mode ? "#FFFFFF" : "#111517")};
    transition: color 0.3s ease;
  }

  @media (max-width: 450px) {
    & p {
      font-size: 12px;
    }
  }
`;
