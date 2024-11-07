// Problem Statement: Create a CountryDropdown component
// Requirements:
// 1. Display two dropdown menus: one for countries and one for cities
// 2. The country dropdown should be populated with a list of countries
// 3. When a country is selected, the city dropdown should update with cities from that country
// 4. Use the provided data structure for countries and cities

import React, { useState } from 'react'

const CountryDropdown = () => {
    // TODO: Implement state for selected country

    const [selectedCountry, setSelectedCountry] = useState(null)
    const [cities, setCities] = useState([])

    const countries = [
        { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
        { name: 'Pakistan', value: 'PAK', cities: ['Lahore', 'Karachi'] },
        { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] },
    ]

    // TODO: Implement logic to filter cities based on selected country

    const handleCountryChange = (e) => {
        const selectedCountryValue = e.target.value
        setSelectedCountry(selectedCountryValue)

        const country = countries.find((country, i) => country.value === selectedCountryValue)
        setCities(country ? country.cities : [])
    }

    return (
        <div>
            {/* TODO: Implement country dropdown */}
            <select name="countries" onChange={handleCountryChange} value={selectedCountry}>
                {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                        {country.name}
                    </option>
                ))}
            </select>

            {cities?.length > 0 && (
                <select name="cities" id="">
                    {cities.map(city => (
                        <option value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            )}

            {/* TODO: Implement city dropdown */}
        </div>
    )
}

export default CountryDropdown