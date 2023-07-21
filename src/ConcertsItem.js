import React, { useState } from 'react';


const ConcertsItem = ({name}) => {
    const [inputValue, setInputValue] = useState('');
    const [concerts, setConcerts] = useState([]);

    const handleInput = (event) => {
        setInputValue(event.target.value);
    }

    const handleAdd = () => {
        if (inputValue !== '') {
            setConcerts((prevConcerts) => [...prevConcerts, inputValue]);
            setInputValue('');
        }
    }





    return (
        <>
        <h3>{name}</h3>
        <ul>
            {concerts.map((all, index) => (
                <li key={index}>{all}</li>
            ))}
        </ul>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default ConcertsItem;