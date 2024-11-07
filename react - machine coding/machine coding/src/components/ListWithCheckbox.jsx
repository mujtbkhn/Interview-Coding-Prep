// Problem: Implement a List component with checkboxes and delete functionality
// Requirements:
// 1. Display a list of items with checkboxes
// 2. When a checkbox is checked, show a delete button for that item
// 3. Clicking the delete button should remove the item from the list
// 4. The list should update dynamically as items are removed

import React, { useState } from 'react'

const ListWithCheckbox = () => {
    // Initial array of items
    const [arr, setArr] = useState(['play cricket', 'play video game', 'read book'])
    const [checkedItems, setCheckedItems] = useState({})

    const handleChange = (id) => {
        setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    const handleCheckboxDelete = (id) => {
        setArr((prev) => prev.filter((item, i) => i !== id))
        setCheckedItems((prev) => {
            const prevItems = { ...prev }
            delete prevItems[id]
            return prevItems
        })
    }

    return (
        <div>
            {arr.map((item, i) => (
                <div key={i}>
                    <input type="checkbox" onChange={() => handleChange(i)} checked={!!checkedItems[i]} name="" id="" /> {item}
                    {checkedItems[i] && <button onClick={() => handleCheckboxDelete(i)}>Delete</button>}
                </div>
            ))}
        </div>
    )
}

export default ListWithCheckbox