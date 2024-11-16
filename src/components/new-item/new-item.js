import './new-item.css'

import ItemForm from './item-form'
import { useState } from 'react'

const NewItem = (props) => {


    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveItemDataHandler = (inputData) => {
        const itemData = {
            ...inputData,
            id: Math.random().toString()
        }
        props.onAddCost(itemData);
        setIsFormVisible(false);
    }

    const toggleFormHandler = () => {
        setIsFormVisible((prev) => !prev);
    }

    return (
        <>
            <div className='new-item '>
                {!isFormVisible && <button onClick={toggleFormHandler}>Add New Item</button>}
                {isFormVisible && <ItemForm onCancelItem={toggleFormHandler} onSaveItemData={saveItemDataHandler} />}
            </div>
        </>
    )
}
export default NewItem