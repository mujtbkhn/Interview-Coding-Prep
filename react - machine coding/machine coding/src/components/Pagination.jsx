/**
 * Implement pagination using this API endpoint - https://dummyjson.com/products,

1. It should display 10 items on each page.
2. The page which is active should show active state.
3. It should have forward and Previous arrow on which we can change the page number.
4. Handle loading state on each page change.
5. When it's the first page the previous button should be disabled, similarly for last page.
api : https://dummyjson.com/products
 */

import React, { useEffect, useState } from 'react'

const Pagination = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [products, setProducts] = useState([])

    useEffect(() => {
        handleFetch()
    }, [currentPage])

    const handleFetch = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products`)
            const json = await response.json()
            setProducts(json.products)
            console.log(json.products)

        } catch (error) {
            console.log(error)
        }
    }

    let itemsPerPage = 10
    let startIndex = (currentPage - 1) * itemsPerPage;
    let displayedProducts = products.slice(startIndex, startIndex + itemsPerPage)
    let total = Math.ceil(products.length / itemsPerPage)

    const handlePrev = () => {
        setCurrentPage((prev) => prev - 1)
    }

    const handleNext = () => {
        setCurrentPage((prev) => prev + 1)
    }
    return (
        <div>
            {displayedProducts.map((product, i) => (
                <div key={i}>
                    <p>{product.title}</p>
                </div>
            ))}
            <button disabled={currentPage === 1} onClick={() => handlePrev()}>Prev</button>
            <button disabled={currentPage === total} onClick={() => handleNext()}>Next</button>
        </div>
    )
}

export default Pagination