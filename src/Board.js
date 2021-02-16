import React from "react";
import Square from "./Square";

const Board = ({ squares,size, onClick }) => (
  <div className="board" style={{gridTemplateColumns:"repeat("+size+", 1fr)",gridTemplateRows:"repeat("+size+", 1fr)"}}>
    {squares.map((square, i) => (
      <Square key={i} value={square} size={size} onClick={() => onClick(i)}/>
    ))}
  </div>
);

export default Board;
