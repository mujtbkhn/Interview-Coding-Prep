// Problem Statement: Create a Calendar component in React
// Requirements:
// 1. Display an input field of type "date"
// 2. Restrict date selection to a range of 31 days before and 30 days after the current date
// 3. Display the selected date

import React from 'react'

const Calendar = () => {
    const minDate = () => {
        const current = new Date()
        current.setDate(current.getDate() - 31)
        return current.toISOString().split('T')[0]
    }

    const maxDate = () => {
        const current = new Date()
        current.setDate(current.getDate() + 30)
        return current.toISOString().split('T')[0]
    }

    return (
        <div>
            <input min={minDate()} max={maxDate()} type="date" name="" id="" />
        </div>
    )
}

export default Calendar