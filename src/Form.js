import { useState } from "react";

function Form (props) {
    const [userInputHeader, changeUserInput] = useState('');
    const [userInputDesc, changeUserInputDesc] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(userInputHeader, userInputDesc);
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input onChange={event => changeUserInput(event.target.value)}></input>
            <br />
            <textarea onChange={event => changeUserInputDesc(event.target.value)}></textarea>
            <br />
            <button type="submit">Add Card</button>
        </form>
    );
}

export default Form;