import React from 'react'
import './ElectronicCategory.css'

const ElectronicCategory = (props) => {

    return (
        <div className='electronic-category'>
            <div className='electronic-category__brand'>{props.brand}</div>
            <div className='electronic-type'>{props.type}</div>
        </div>
    )
}

export default ElectronicCategory