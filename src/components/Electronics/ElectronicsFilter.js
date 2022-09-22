import React from 'react';

import './ElectronicsFilter.css';

const ElectronicsFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='electronics-filter'>
      <div className='electronics-filter__control'>
        <label>Filter by brand</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='Apple'>Apple</option>
          <option value='Samsung'>Samsung</option>
          <option value='Xiaomi'>Xiaomi</option>
        </select>
      </div>
    </div>
  );
};

export default ElectronicsFilter;