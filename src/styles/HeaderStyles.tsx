import styled from "styled-components";

export const HeaderCon = styled.header`
  padding: 1rem 3rem;
  box-shadow: 0px 2px 4px 0px #0000000e;
  background-color: #ffffff;
`;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2 {
    font-size: 24px;
    font-weight: 800;
    color: #111517;
  }

  @media (max-width: 450px) {
    & h2 {
      font-size: 14px;
    }
  }
`;

export const ModeBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  & p {
    font-weight: 600;
    color: #111517;
  }

  @media (max-width: 450px) {
    & p {
      font-size: 12px;
    }
  }
`;
