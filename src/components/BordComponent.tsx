import "../App.css";
import { Board } from "../models/Board";

import CellComponent from "./CellComponent";

interface Props {
  board: Board;
  setBoard: (board: Board) => void;
}

function BordComponent({ board }: Props) {
  return (
    <div className="board">
      {board.cells.map((row: Cell[], index: number) => (
        <>
          {row.map((cell) => (
            <CellComponent />
          ))}
        </>
      ))}
    </div>
  );
}

export default BordComponent;
