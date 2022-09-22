import React from 'react'
import ElectronicCategory from './ElectronicCategory';
import './ElectronicItem.css'
import Card from '../UI/Card';

const ElectronicItem = (props) => {
    // const [title, setTitle] = useState(props.title);
    // console.log('ElectronicItem evaluated by React')

    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     console.log(title);
    // }


    return (
        <Card className='electronic-item'>
            <ElectronicCategory type={props.type} brand={props.brand} />
            <div className='electronic-item__description'>
                <h2>{props.title}</h2>
                <div className='electronic-item__price'>${props.price}</div>
            </div>
        </Card>
    )
}

export default ElectronicItem;