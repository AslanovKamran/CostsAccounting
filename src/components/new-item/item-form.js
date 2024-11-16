import { useState } from 'react';
import './item-form.css';

const ItemForm = (props) => {

    const [userInput, setUserInput] = useState({
        title: '',
        price: '',
        date: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput(prevState => ({ ...prevState, title: event.target.value }))
    };

    const priceChangeHandler = (event) => {
        setUserInput(prevState => ({ ...prevState, price: event.target.value }))
    };

    const dateChangeHandler = (event) => {
        setUserInput(prevState => ({ ...prevState, date: event.target.value }))
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const data = { ...userInput, date: new Date(userInput.date) }
        props.onSaveItemData(data)

        // Reset the form
        setUserInput({ title: '', price: '', date: '' });

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="item-form__controls">
                <div className="item-form__control">
                    <label htmlFor="title">Title</label>
                    <input required value={userInput.title} type="text" placeholder="Type title here ... " id="title" onChange={titleChangeHandler} />
                </div>
                <div className="item-form__control">
                    <label htmlFor="price">Price</label>
                    <input value={userInput.price} min='0.01' step='0.01' type="number" placeholder="Type price here ... " id="price" onChange={priceChangeHandler} />
                </div>
                <div className="item-form__control">
                    <label htmlFor="date">Date</label>
                    <input value={userInput.date} min='2019-01-01' max='2022-12-31' type="date" id="date" onChange={dateChangeHandler} />
                </div>

                <div className="item-form__actions">
                    <button type="submit">Add Item</button>
                    <button onClick={props.onCancelItem} type="button">Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default ItemForm;