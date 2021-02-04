import React, { useState, useEffect } from 'react';
import { Board, GameInfo } from './components';
import { STATES } from './constants';
import { calculateShipPositions, calculateHit } from './utils/utils';

const App = () => {
  const [hits, setHits] = useState([]);
  const [cells, setCells] = useState(calculateShipPositions());
  const [isFinished, setFinished] = useState(false);

  useEffect(() => {
    if (hits.length === 17) {
      setFinished(true);
    }
  }, [hits]);

  const handleHit = (id) => {
    if (isFinished) return;

    const { data, state } = calculateHit(cells, id);
    if (state === STATES.hit) {
      setHits([...hits, id]);
    }
    setCells([...data]);
  };

  return (
    <div className="app">
      <main>
        <GameInfo hits={hits} />
        <Board hits={hits} setHit={handleHit} cells={cells} />
      </main>
      {isFinished && <h1>Game Over!</h1>}
    </div>
  );
};

export default App;
