// simple todo with crud operations

import React, { useEffect, useRef, useState } from 'react'

const TodoList = () => {

    const [text, setText] = useState('');
    const [todos, setTodos] = useState([])
    const [editIndex, setEditIndex] = useState(-1)

    const todoRef = useRef()

    const handleAddTodo = () => {
        if (editIndex !== -1) {
            const newTodos = [...todos];
            newTodos[editIndex] = text
            setTodos(newTodos)
            setEditIndex(-1)
        } else {
            if (text.trim() !== "") {
                setTodos([...todos, text])
            }
        }
        setText('')
    }

    const handleDelete = (id) => {
        setTodos(todos.filter((_, i) => i !== id))
    }

    const handleEdit = (id) => {
        setText(todos[id])
        setEditIndex(id)
        todoRef.current.focus()
    }
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} ref={todoRef} />
            <button onClick={() => handleAddTodo()}>Add Todo</button>

            {todos.map((todo, i) => (
                <>
                    <div key={i}>
                        {todo}
                    </div>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                    <button onClick={() => handleEdit(i)}>Edit</button>
                </>
            ))}
        </div>
    )
}

export default TodoList