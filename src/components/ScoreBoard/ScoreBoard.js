import React from 'react';
import './ScoreBoard.scss';

export const ScoreBoard = () => {
  return (
    <div className="scoreBoardContainer">
      <div className="player player1">
        <span className="score">00</span>
        <span className="name">player 1</span>
      </div>
      <div className="player player2">
        <span className="score">00</span>
        <span className="name">player 2</span>
      </div>
    </div>
  );
};
