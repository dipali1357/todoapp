import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }
    return (
        <div className="todo-form">
            {props.edit ? <><input
                type="text"
                placeholder="Update todo"
                value={input}
                name="text"
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />
                <button
                    className="todo-button"
                    onClick={handleSubmit}
                >Update</button>
            </>
                : <>
                    <input
                        type="text"
                        placeholder="Add a todo"
                        value={input}
                        name="text"
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button
                        className="todo-button"
                        onClick={handleSubmit}
                    >Add Todo</button>
                </>
            }
        </div>
    )
}

export default TodoForm
