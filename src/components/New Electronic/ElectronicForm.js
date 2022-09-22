import React, { useState } from 'react'
import './ElectronicForm.css'



const ElectronicForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredBrand, setEnteredBrand] = useState('');
  const [enteredType, setEnteredType] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  }
  const brandChangeHandler = (event) => {
    setEnteredBrand(event.target.value);
  }
  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const electronicData = {
      title: enteredTitle,
      price: +enteredPrice,
      brand: enteredBrand,
      type: enteredType,
    };

    props.onSaveElectronicData(electronicData);
    setEnteredTitle('');
    setEnteredBrand('');
    setEnteredPrice('');
    setEnteredType('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-electronic__controls'>
        <div className='new-electronic__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-electronic__control'>
          <label>Price</label>
          <input type='number' min='0.01' step='0.01' value={enteredPrice} onChange={priceChangeHandler} />
        </div>
        <div className='new-electronic__control'>
          <label>Brand</label>
          <input type='text' value={enteredBrand} onChange={brandChangeHandler} />
        </div>
        <div className='new-electronic__control'>
          <label>Type</label>
          <input type='text' value={enteredType} onChange={typeChangeHandler} />
        </div>
      </div>
      <div className='new-electronic__actions'>
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Electronic</button>
      </div>

    </form>
  )
}

export default ElectronicForm