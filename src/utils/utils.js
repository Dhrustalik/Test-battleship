import { BOARD_SIZE, STATES } from '../constants';

export const LAYOUT = [
  {
    ship: 'carrier',
    positions: [
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
    ],
  },
  {
    ship: 'battleship',
    positions: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
  },

  {
    ship: 'cruiser',
    positions: [
      [8, 1],
      [8, 2],
      [8, 3],
    ],
  },

  {
    ship: 'submarine',
    positions: [
      [3, 0],
      [3, 1],
      [3, 2],
    ],
  },

  {
    ship: 'destroyer',
    positions: [
      [0, 0],
      [1, 0],
    ],
  },
];

export const calculateShipPositions = () => {
  const cells = createEmptyBoard();
  LAYOUT.map((item) => {
    const positions = item.positions;
    positions.forEach((coords) => {
      const idx = coordsToIndex({ x: coords[0], y: coords[1] });
      cells[idx] = STATES.ship;
    });
    return 1;
  });

  return cells;
};

export const createEmptyBoard = () => {
  return Array(BOARD_SIZE * BOARD_SIZE).fill(STATES.empty);
};

export const coordsToIndex = (coords) => {
  return coords.y * 10 + coords.x;
};

export const calculateHit = (cells, id) => {
  if (cells[id] === STATES.ship) {
    cells[id] = STATES.hit;
  } else if (cells[id] === STATES.empty) {
    cells[id] = STATES.miss;
  }
  return { data: cells, state: cells[id] };
};
