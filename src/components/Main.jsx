import Die from "./Die";

function Main() {
  // let dieSection;
  // for (let i = 0; i < 10; i++) {
  //   dieSection += <Die value={i} />;
  // }

  function allNewDice(){
    let array = []
    for (let index = 0; index < 10; index++) {
      array[index] = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    }
    return array
  }

  console.log('allNewDice()',allNewDice())

  const dieSection = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4].map((idx) => <Die value={idx}/>);

  return (
    <main className="main">
      <section className="die-container">{dieSection}</section>
    </main>
  );
}

export default Main;
