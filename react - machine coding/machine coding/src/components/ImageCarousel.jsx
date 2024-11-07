// implement a image carousel with prev, next buttons also play and pause when clicked on play it changes the slides every 2 seconds and on pause stops the playing

import React, { useEffect, useState } from 'react'

const ImageCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                setCurrentImage((prev) => (prev + 1) % IMAGES.length)
            }, 2000);
        }

        return () => clearInterval(timer)
    }, [isPlaying])
    const IMAGES = [
        ['https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter+0'],
        ['https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter+1'],
        ['https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter+2'],
        ['https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter+3'],
        ['https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter+4'],
    ]

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)
    }

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % IMAGES.length)
    }

    const handlePlay = () => {
        setIsPlaying(true)
    }

    const handleStop = () => {
        setIsPlaying(false)
    }

    return (
        <>

            <img src={IMAGES[currentImage]} alt="" />
            <button onClick={() => handlePrev()}>PREV</button>
            <button onClick={() => handleNext()}>NEXT</button>

            <button onClick={() => handlePlay()}>Play</button>
            <button onClick={() => handleStop()}>Stop</button>
        </>
    )
}

export default ImageCarousel