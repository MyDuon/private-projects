import Header from "../components/Header/Header";
import "./TicTacToePage.css";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function TicTacToePage() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <>
      <Header />
      <div className="tictactoe-container">
        <h1 className="tictactoe-header">Tic Tac Toe</h1>
        <div className="tictactoe-wrapper">
          <div className="status">{status}</div>
          <button className="reset-button" onClick={resetGame}>
            reset
          </button>
          <div className="grid1">
            <Square
              className="square"
              value={squares[0]}
              onSquareClick={() => handleClick(0)}
            />
            <Square
              className="square"
              value={squares[1]}
              onSquareClick={() => handleClick(1)}
            />
            <Square
              className="square"
              value={squares[2]}
              onSquareClick={() => handleClick(2)}
            />
            <Square
              className="square"
              value={squares[3]}
              onSquareClick={() => handleClick(3)}
            />
            <Square
              className="square"
              value={squares[4]}
              onSquareClick={() => handleClick(4)}
            />
            <Square
              className="square"
              value={squares[5]}
              onSquareClick={() => handleClick(5)}
            />
            <Square
              className="square"
              value={squares[6]}
              onSquareClick={() => handleClick(6)}
            />
            <Square
              className="square"
              value={squares[7]}
              onSquareClick={() => handleClick(7)}
            />
            <Square
              className="square"
              value={squares[8]}
              onSquareClick={() => handleClick(8)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default TicTacToePage;
