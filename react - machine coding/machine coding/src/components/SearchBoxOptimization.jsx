// Problem: Implement a search box with debounce and highlighting
// Requirements:
// 1. Create an input field for searching users
// 2. Implement debounce functionality to optimize search performance
// 3. Display suggestions based on the search input
// 4. Highlight the matched part of the suggestion
// 5. Handle edge cases (empty input, no results)

import React from 'react'

const SearchBoxOptimization = () => {
    // Add necessary state variables here

    // Implement debounce function

    const users = [
        { name: "Alice Johnson", email: "alice.johnson@example.com", city: "New York" },
        { name: "Bob Smith", email: "bob.smith@example.com", city: "Los Angeles" },
        { name: "Charlie Brown", email: "charlie.brown@example.com", city: "Chicago" },
        { name: "David Wilson", email: "david.wilson@example.com", city: "Houston" },
        { name: "Edward Thomas", email: "edward.thomas@example.com", city: "Phoenix" },
        { name: "Fiona Davis", email: "fiona.davis@example.com", city: "Philadelphia" },
        { name: "George Martinez", email: "george.martinez@example.com", city: "San Antonio" },
        { name: "Hannah Moore", email: "hannah.moore@example.com", city: "San Diego" },
        { name: "Irene Clark", email: "irene.clark@example.com", city: "Dallas" },
        { name: "Jack Lewis", email: "jack.lewis@example.com", city: "San Jose" },
    ];

    // Implement useEffect for handling search and suggestions

    return (
        <>
            {/* Render input field */}
            {/* Render suggestions with highlighting */}
        </>
    )
}

export default SearchBoxOptimization

// Implement debounce custom hook here