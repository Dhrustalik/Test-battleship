import React from 'react';
import { Cell } from '../Cell/Cell';
import './Board.scss';

export const Board = ({ hits, cells, setHit }) => {
  return (
    <div className="board">
      {cells.map((cell, indx) => (
        <Cell key={indx} cell={cell} onClick={setHit} id={indx} />
      ))}
    </div>
  );
};
