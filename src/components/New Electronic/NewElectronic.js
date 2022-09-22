import React, { useState } from 'react'
import ElectronicForm from './ElectronicForm'
import "./NewElectronic.css"

const NewElectronic = (props) => {
    const [isEditing, setIsEditing] = useState(false)


    const saveElectronicDataHandler = (enteredElectronicData) => {
        const electronicData = {
            ...enteredElectronicData,
            id: Math.random().toString()
        };
        props.onAddElectronic(electronicData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-electronic'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Electronic</button>
            }
            {isEditing && <ElectronicForm onSaveElectronicData={saveElectronicDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
};

export default NewElectronic