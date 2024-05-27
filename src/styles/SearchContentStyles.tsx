import styled from "styled-components";
import { ModeProps } from "../types/ModePropTypes";

export const SearchCon = styled.div`
  margin: 3rem 2rem;

  @media (max-width: 450px) {
    margin: 2rem;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media (max-width: 685px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const SearchInpBox = styled.div<ModeProps>`
  width: 30%;
  padding: 1rem;
  box-shadow: 0px 2px 9px 0px #0000000e;
  background-color: ${(props) => (props.$mode ? "#2B3844" : "#ffffff")};
  transition: background-color 0.3s ease, color 0.3s ease;

  display: flex;
  align-items: center;
  gap: 10px;

  svg:nth-child(1) {
    color: ${(props) => (props.$mode ? "#ffffff" : "normal")};
  }

  & input {
    border: none;
    outline: none;
    width: 100%;
    color: ${(props) => (props.$mode ? "#ffffff" : "normal")};
    background-color: ${(props) => (props.$mode ? "#2b3844" : "#ffffff")};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  @media (max-width: 685px) {
    width: 100%;

    & input {
      font-size: 12px;
    }
  }
`;
