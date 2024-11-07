// on clicking add item it should add a new list of item with number like item 1 item 2 item 3 .....
import { useState } from 'react';

export function ListOfItems() {
    const [items, setItems] = useState([]);

    const addItem = () => {

    };

    return (
        <div>
            <h1>List of items</h1>
            <button onClick={addItem}>Add Item</button>

        </div>
    );
}

export default ListOfItems;
