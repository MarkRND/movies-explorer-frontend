import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <label className="filter">
      <input className="filter__checkbox" type="checkbox" />
      <div className="filter__switch"></div>
      <span className="filter__text">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
