import React, { useState } from 'react'

import Electronics from './components/Electronics/Electronics';
import NewElectronic from './components/New Electronic/NewElectronic';

const DUMMY_ELECTRONICS = [
  {
    id: 'e1',
    title: 'Iphone 14 Prox Max 1TB',
    price: 2400,
    brand: 'Apple',
    type: 'Phone',
  },
  {
    id: 'e2',
    title: 'Samsung Galaxy Note 11',
    price: 1900,
    brand: 'Samsung',
    type: 'Phone',
  },
  {
    id: 'e3',
    title: 'Xiaomi Zeno Pro 4',
    price: 1500,
    brand: 'Xiaomi',
    type: 'Phone',
  },
  {
    id: 'e4',
    title: 'Airpods Pro',
    price: 249.99,
    brand: 'Apple',
    type: 'Accessories',
  },
  {
    id: 'e5',
    title: 'Samsung Glaxy Earbuds',
    price: 230.99,
    brand: 'Samsung',
    type: 'Accessories',
  },
  {
    id: 'e6',
    title: 'Apple Watch Series 7',
    price: 543.67,
    brand: 'Apple',
    type: 'Accessories',
  },

];

const App = () => {
  const [electronics, setElectronics]=useState(DUMMY_ELECTRONICS)

  const addElectronicHandler = (electronic) => {
    setElectronics((prevElectronics)=>{
      return[electronic, ...prevElectronics];
    });
  };

  return (
    <div>
      <NewElectronic onAddElectronic={addElectronicHandler} />
      <Electronics items={electronics} />
    </div>
  )
}

export default App




