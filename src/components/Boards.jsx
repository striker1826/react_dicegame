import { styled } from "styled-components";
import { Board } from "../style";

const Boards = ({ dice, otherDice, gameHistory, otherGameHistory }) => {
  const addedNum = gameHistory.reduce((a, b) => a + b, 0);
  const otherAddedNum = otherGameHistory.reduce((a, b) => a + b, 0);

  return (
    <Wrap>
      <Board>
        <Heading>나</Heading>
        <Dice src={dice} />
        <Heading>총점</Heading>
        <p>{addedNum}</p>
        <Heading>기록</Heading>
        <p>{gameHistory.join(", ")}</p>
      </Board>
      <Board>
        <Heading>상대</Heading>
        <Dice src={otherDice} />
        <Heading>총점</Heading>
        <p>{otherAddedNum}</p>
        <Heading>기록</Heading>
        <p>{otherGameHistory.join(", ")}</p>
      </Board>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 27px;
`;

const Heading = styled.h2`
  margin: 45px auto 15px;
  color: #888d9d;
  font-weight: 400;
  font-size: 18px;
`;

const Dice = styled.img`
  width: 100%;
  max-width: 100px;
  max-height: 100px;
`;

export default Boards;

/*
    1. 1~6 랜덤의 숫자 생성
    2. 숫자에 따른 주사위 이미지 표출
    3. 기록: 나오는 숫자들 기록
    4. 총점: 나온 숫자들 총합
*/
