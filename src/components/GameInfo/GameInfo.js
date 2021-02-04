import React from 'react';
import { ScoreBoard } from '../ScoreBoard';
import { Ships } from '../Ships';
import './GameInfo.scss';

export const GameInfo = () => {
  return (
    <div className="container">
      <ScoreBoard />
      <Ships />
    </div>
  );
};
