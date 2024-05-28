import styled from "styled-components";

export const LoaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100vh;

  svg:nth-child(1) {
    width: 100px;
    height: 100px;
  }

  & p {
    margin-top: 10px;
    font-size: 25px;
    color: #333;
  }
`;
