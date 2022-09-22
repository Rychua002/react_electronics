import React from 'react'
import "./ElectronicsList.css"
import ElectronicItem from './ElectronicItem'

const ElectronicsList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='electronics-list__fallback'>No Electronics Available.</h2>
    }
    
    return (
        <ul className='electronics-list'>

            {props.items.map((electronic) => (
                <ElectronicItem
                    key={electronic.id}
                    title={electronic.title}
                    price={electronic.price}
                    type={electronic.type}
                    brand={electronic.brand}

                />
            ))}
        </ul>


    )

}

export default ElectronicsList