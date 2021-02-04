import React from 'react';
import Carrier from '../../assets/images/Carrier Shape.png';
import Aircraft from '../../assets/images/Aircraft Shape.png';
import Battleship from '../../assets/images/Battleship Shape.png';
import Cruiser from '../../assets/images/Cruiser Shape.png';
import Submarine from '../../assets/images/Submarine Shape.png';
import Miss from '../../assets/images/Miss small.png';
import './Ships.scss';

export const Ships = () => {
  return (
    <div className="shipsContainer">
      <div className="ship">
        <img src={Aircraft} alt="Aircraft" />
        <div className="score">
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
        </div>
      </div>

      <div className="ship">
        <img src={Battleship} alt="Battleship" />
        <div className="score">
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
        </div>
      </div>

      <div className="ship">
        <img src={Cruiser} alt="Cruiser" />
        <div className="score">
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
        </div>
      </div>

      <div className="ship">
        <img src={Submarine} alt="Submarine" />
        <div className="score">
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
        </div>
      </div>

      <div className="ship">
        <img src={Carrier} alt="Carrier" />
        <div className="score">
          <img src={Miss} alt="miss" />
          <img src={Miss} alt="miss" />
        </div>
      </div>
    </div>
  );
};
