import { useState } from "react";

const TURNS = {
  X: "X",
  O: "O",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index)
  }
  return <div onClick={handleClick} className={className}>{children}</div>;
};

const WINNER_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    // Revisamos todas las combinaciones ganadoras para ver si X u O es el que ganó
    for (const combo of WINNER_COMBO) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null)
  }

  const updateBoard = (index) => {
    // Si el board ya tiene algo, no se actualiza (n ose sobreescribe)
    if (board[index] || winner) return
    // Actualizamos el tablero
    const newBoard = [... board];
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
  }

  return (
    <main className="board">
      <h1>TA TE TI</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : 'Ganó:'
                }
              </h2>

              <header className="win">
                { winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  );
}

export default App;