
import { useState } from 'react';

import '../index.scss'


export default function TodoInput( {todoItem, onEdit } ) {
    
    const [ inputValue, setInputValue ] = useState( todoItem.title )

    return (
        <input 
            className='todo-item__input' 
            autoFocus 
            type="text" 
            defaultValue={inputValue} 
            onChange={ (e) => { setInputValue( e.target.value ) }}
            onBlur={ () => { onEdit(todoItem.id, inputValue) }}
        />
    );
}