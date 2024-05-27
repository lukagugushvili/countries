import styled from "styled-components";
import { ModeProps } from "../types/ModePropTypes";
import { ShowRegionInter } from "../types/ShowRegionsTypes";

export const RegionConWrapper = styled.div``;

export const RegionConBox = styled.div<ShowRegionInter & ModeProps>`
  cursor: pointer;
  padding: 1rem;
  box-shadow: 0px 2px 9px 0px #0000000e;
  color: ${(props) => (props.$mode ? "#FFFFFF" : "#111517")};
  background-color: ${(props) => (props.$mode ? "#2B3844" : "#ffffff")};
  transition: background-color 0.3s ease, color 0.3s ease;

  & p {
    font-size: 14px;
    color: ${(props) => (props.$mode ? "#FFFFFF" : "#111517")};
    transition: color 0.3s ease;
  }

  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  svg:nth-child(2) {
    transform: ${(props) =>
      props.$showRegions ? "rotate(270deg)" : "rotate(90deg)"};
    transition: transform 0.3s ease;
  }

  @media (max-width: 450px) {
    & p {
      font-size: 12px;
    }
  }
`;

export const RegionBox = styled.div<ModeProps>`
  margin-top: 4px;
  padding: 1rem;
  background-color: ${(props) => (props.$mode ? "#2B3844" : "#ffffff")};
  box-shadow: 0px 2px 9px 0px #0000000e;
  transition: background-color 0.3s ease, color 0.3s ease;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & p {
    cursor: pointer;
    font-size: 14px;
    color: ${(props) => (props.$mode ? "#FFFFFF" : "#111517")};
  }

  @media (max-width: 450px) {
    & p {
      font-size: 12px;
    }
  }
`;
