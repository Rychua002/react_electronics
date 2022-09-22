import React, { useState } from 'react';

import './Electronics.css'
import Card from '../UI/Card';
import ElectronicsFilter from './ElectronicsFilter';
import ElectronicsList from './ElectronicsList';


const Electronics = (props) => {
    const [filteredBrand, setFilteredBrand] = useState('Apple');

    const filterChangeHandler = selectedBrand => {
        setFilteredBrand(selectedBrand);
    }
    const filteredElectronics = props.items.filter(electronic => {
        return electronic.brand === filteredBrand;
    })



    return (
        <li>
            <Card className='electronics'>
                <ElectronicsFilter selected={filteredBrand} onChangeFilter={filterChangeHandler} />
                
                    <ElectronicsList
                        items={filteredElectronics} />
            </Card>
        </li>
    );
}

export default Electronics