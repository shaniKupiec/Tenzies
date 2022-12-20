import { useState } from "react";
import Die from "./Die";

function Main() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    let array = [];
    for (let index = 0; index < 10; index++) {
      array[index] = generateNewDie();
    }
    return array;
  }

  function roll() {
    setDice((prevState) =>
      prevState.map((dice) => {
        return dice.isHeld ? dice : generateNewDie();
      })
    );
  }

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * (6 - 1 + 1) + 1),
      isHeld: false,
      id: makeId(),
    };
  }

  function toggleHold(dieId) {
    setDice((prevState) =>
      prevState.map((die) => {
        return die.id === dieId ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  const dieSection = dice.map((diceInfo) => <Die value={diceInfo.value} key={diceInfo.id} isHeld={diceInfo.isHeld} toggleHold={() => toggleHold(diceInfo.id)} />);

  return (
    <main className="main">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className="die-container">{dieSection}</section>
      <button onClick={roll} className="main__btn">
        Roll
      </button>
    </main>
  );
}

export default Main;
