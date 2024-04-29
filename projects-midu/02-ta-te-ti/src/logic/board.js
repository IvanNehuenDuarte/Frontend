import { WINNER_COMBO } from "../components/constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  // Revisamos todas las combinaciones ganadoras para ver si X u O es el que ganó
  for (const combo of WINNER_COMBO) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  // Revisamos si hay un empate
  // Si no hay más espacios vacios en el tablero

  // newBoard = [null, null, null, null, null, null, null, null] entonces verificamos todos los null de new board, si new board es distinto de null, es decir ya no hay espacio vacio en el tablero
  return newBoard.every((square) => square !== null);
};
