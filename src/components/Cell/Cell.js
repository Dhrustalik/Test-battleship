import React from 'react';
import { STATES } from '../../constants';
import './Cell.scss';

export const Cell = ({ cell, onClick, id }) => {
  let className = 'cell';

  if (cell === STATES.hit) {
    className = 'cell cellHit';
  }

  if (cell === STATES.miss) {
    className = 'cell cellMiss';
  }
  return <div className={className} onClick={() => onClick(id)} />;
};
