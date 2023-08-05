import React from "react";
import './FilterCheckbox.css';

const FilterCheckbox = ({ onCheckbox, onSwitch }) => {
  return (
    <label className="filter">
      <input className="filter__checkbox" type="checkbox" onChange={onCheckbox}
        checked={onSwitch ? true : false} />
      <div className="filter__switch"></div>
      <span className="filter__text">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
