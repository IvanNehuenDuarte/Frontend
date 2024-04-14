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

  const checkEndGame = (newBoard) => {
    // Revisamos si hay un empate
    // Si no hay más espacios vacios en el tablero

    // newBoard = [null, null, null, null, null, null, null, null] entonces verificamos todos los null de new board, si new board es distinto de null, es decir ya no hay espacio vacio en el tablero
    return newBoard.every((square) => square !== null)
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
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
    }
  }

  return (
    <main className="board">
      <h1>TA TE TI</h1>
      <button onClick={resetGame}>Reiniciar Juego</button>
      <section className="game">
        {/* La primera posición es un square, entonces indicamos que de la primera posición hasta la ultima del index, va a ser square */}
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
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
