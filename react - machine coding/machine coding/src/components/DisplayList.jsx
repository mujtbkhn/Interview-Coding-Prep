// Problem Statement:
// Using the API endpoint https://dummyjson.com/products:
// 1. Fetch and display the data in a list.
// 2. Add a 'completed' field (initially false) to each item before displaying.
// 3. Each item should have a checkbox and a delete button.
// 4. Implement delete functionality for each item.
// 5. On checkbox click, mark the item as completed and apply a line-through style.
// 6. Disable the delete button for completed items.

import React, { useState, useEffect } from 'react'

const DisplayList = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products?limit=10')
            const json = await res.json()
            const updatedProducts = json.products.map(product => ({
                ...product,
                completed: false
            }))
            setData(updatedProducts)
            console.log(updatedProducts)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCheckBoxChange = (id) => {
        setData(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        )
    }

    const handleDelete = (id) => {
        setData(data.filter((_, i) => i !== id))
    }

    return (
        <div>
            {data.map((item, i) => (
                <div style={{ textDecoration: item.completed ? 'line-through' : 'none' }} key={item.id}>
                    <input type="checkbox"
                        checked={item.completed}
                        onChange={() => handleCheckBoxChange(item.id)} />
                    {item.title}
                    <button disabled={item.completed} onClick={() => handleDelete(i)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default DisplayList
