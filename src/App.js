import React , { useState } from "react";
import Board from "./Board";
import calculateWinner from "./whowin";

const App = () => {
  const [size,setSize] = useState(20);
  const [maxSize,setMaxSize] = useState(20);
  const [settingphase,setSettingphase] = useState(true);
  const [startWord,setStartWord] = useState("start");
  const [changeWord,setChangeWord] = useState("");
  
  const [history, setHistory] = useState([Array(size*size).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber],size,settingphase);
  const xO = xIsNext ? "X" : "O";


  const handleClick = (i) => {
    if (settingphase === true){
      jumpTo(0);
      setStartWord("");
      setChangeWord("Change");
      setSettingphase(!settingphase)
    }
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || stepNumber == (size*size) ){
      alert("you can rollback and continue in history OR resize then restart")
      console.log(stepNumber)
      return;
    }
    if (squares[i]) return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
    
  };

  const jumpTo = (step) => {
    if(settingphase === false){
      setStepNumber(step);
      setXisNext(step % 2 === 0);
    }
  };


  const renderMoves = () =>
    history.map((_step, move) => {
      if(settingphase === false && stepNumber > 0){
      const destination = move ? `Go to move #${move}` : "ReStart";
      return (
        <li key={move}>
          <button className="button" onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
      }
    });

  const startGame = () => {
    if (settingphase === true) {
      setStartWord("");
      setChangeWord("Change");
    }
    else{
      jumpTo(0);
      setStartWord("Start");
      setChangeWord("");
    }
    setSettingphase(!settingphase)
  }

  return (<>
      <div className="select-container">
        {settingphase && <input type="range" min={2} max={maxSize} value={size} class="slider" 
          onChange={ e => setSize(e.target.value) } ></input>
          }
        {settingphase && <h3>slide to change size win with 2 in 2x2,3 in 3x3,4 in 4x4 to 20x20</h3>}
        <button className="button" onClick={() => startGame()}>{changeWord} size {size}x{size} {startWord}</button>
      </div>
      <Board squares={history[stepNumber]} size={size} onClick={handleClick}> </Board>
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
      </div>

    </>);
}
export default App;
