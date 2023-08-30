import { useState } from "react";
import { styled } from "styled-components";
import Header from "./components/Header";
import Boards from "./components/Boards";
import { generateNumber } from "./utils";
import { blueDiceImg, redDiceImg } from "./config";
import blueDice1 from "./assets/dice-blue-1.svg";
import redDice1 from "./assets/dice-red-1.svg";

const App = () => {
  const [currentDice, setCurrentDice] = useState(blueDice1);
  const [otherDice, setOtherDice] = useState(redDice1);
  const [gameHistory, setGameHistory] = useState([]);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  const onChaneDice = () => {
    const num = generateNumber();
    const otherNum = generateNumber();
    setCurrentDice(blueDiceImg[num]);
    setOtherDice(redDiceImg[otherNum]);
    setGameHistory([...gameHistory, num]);
    setOtherGameHistory([...otherGameHistory, otherNum]);
  };

  return (
    <AppStyle>
      <Header changeDice={onChaneDice} />
      <Boards
        dice={currentDice}
        otherDice={otherDice}
        gameHistory={gameHistory}
        otherGameHistory={otherGameHistory}
      />
    </AppStyle>
  );
};

const AppStyle = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 20px auto;
  text-align: center;
`;

export default App;
