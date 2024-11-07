// Problem: Implement a car listing with search functionality
// Requirements:
// 1. Display a list of cars with their details (id, make, model, type, price)
// 2. Implement a search box to filter cars by make, model, or price
// 3. Use debounce to optimize search performance
// 4. Combine car information with prices from separate lists
// 5. Highlight filtered rows when searching

import React from 'react'

export default function List() {
    // Add necessary state variables here

    // Implement debounce function or custom hook

    // Implement useEffect for combining car and price data

    // Implement search filtering logic

    return (
        <div className="App" style={{ marginTop: 20 }}>
            {/* Implement search box */}
            
            {/* Implement table to display car list */}
        </div>
    );
}

// Car and price data
export const CAR_LIST = [
    {
        id: 1,
        make: "Mitsubishi",
        model: "Lancer",
        type: "Used",
    },
    { id: 2, make: "Honda", model: "Vezel", type: "New" },
    { id: 3, make: "Honda", model: "Civic", type: "Used" },
    { id: 4, make: "Audi", model: "A3", type: "New" },
    { id: 5, make: "Audi", model: "A4", type: "Used" },
    { id: 6, make: "Audi", model: "A7", type: "New" },
    { id: 7, make: "BMW", model: "i8", type: "Used" },
];

export const PRICE_LIST = [
    { car_id: 1, price: 1000 },
    { car_id: 2, price: 2000 },
    { car_id: 3, price: 3000 },
    { car_id: 4, price: 4000 },
    { car_id: 5, price: 5000 },
    { car_id: 6, price: 6000 },
    { car_id: 7, price: 7000 },
];

// Implement debounce function here