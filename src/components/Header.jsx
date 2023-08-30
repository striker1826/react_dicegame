import styled from "styled-components";
import logo from "../assets/logo.png";
import { AppBtn } from "../style";
import { generateNumber } from "../utils";
import blueDice1 from "../assets/dice-blue-1.svg";

const Header = ({ changeDice, reset }) => {
  return (
    <>
      <AppLogo src={logo} />
      <AppTitle>주사위 게임</AppTitle>
      <div>
        <BlueBtn onClick={changeDice}>던지기</BlueBtn>
        <RedBtn onClick={reset}>처음부터</RedBtn>
      </div>
    </>
  );
};

const AppLogo = styled.img`
  height: 65px;
`;

const AppTitle = styled.h1`
  margin: 10px auto 28px;
  font-size: 28px;
`;

const BlueBtn = styled(AppBtn)`
  &:hover {
    background-color: rgba(0, 89, 255, 0.3);
  }
  border: 1px solid #7090ff;
  color: #7090ff;
  background-color: rgba(0, 89, 255, 0.2);
`;

const RedBtn = styled(AppBtn)`
  &:hover {
    background-color: rgba(255, 78, 78, 0.3);
  }
  border: 1px solid #ff4664;
  color: #ff4664;
  background-color: rgba(255, 78, 78, 0.2);
`;

export default Header;
