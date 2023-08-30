import styled from "styled-components";

const AppBtn = styled.button`
  margin: 6px;
  min-width: 120px;
  padding: 14px 27px;
  border-radius: 9999px;
  outline: none;
  font-size: 18px;
  font-family: "NanumSquareRoundEB";
  cursor: pointer;
  border: 1px solid #7090ff;
`;

const Board = styled.div`
  display: inline-block;
  padding: 35px 30px;
  border: 1px solid transparent;
  border-radius: 12px;
  font-size: 16px;
  text-align: center;
  background-color: #272b38;
  width: 30%;
  margin: 10px;
`;
export { AppBtn, Board };
