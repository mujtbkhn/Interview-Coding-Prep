// add infinite scrolling when the user comes at the bottom of the screen it should automatically fetch new data from this api
// https://catfact.ninja/facts?page=1

import React, { useEffect, useState } from 'react'

const InfiniteScrolling = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetchCatData(currentPage)
    }, [currentPage])

    useEffect(() => {
        const handleInfiniteScrolling = () => {
            if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.scrollHeight && !loading) {
                setCurrentPage((prevPage) => prevPage + 1)
            }

        }
        window.addEventListener('scroll', handleInfiniteScrolling)

        return () => window.removeEventListener('scroll', handleInfiniteScrolling)
    }, [loading])

    const fetchCatData = async (pageId) => {
        try {
            setLoading(true)
            const response = await fetch(`https://catfact.ninja/facts?page=${pageId}`)
            const json = await response.json()
            setData((prevData) => [...prevData, ...json.data])
            console.log(json.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <div style={{ padding: '10rem' }}>
            {data.map((catData, i) => (
                <h1 key={i}>
                    {catData.fact}
                </h1>
            ))}
            {loading && <p>Loading more cat facts...</p>}
        </div>
    )
}

export default InfiniteScrolling