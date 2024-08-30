'use client'
import React, { useEffect, useState, useRef } from 'react'
import  {  ImageAndTextType } from './utils'
import Image from 'next/image'

function Gallery({ImageAndText}:{ImageAndText:ImageAndTextType}) {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollableContainerRef = useRef(null)

  const scroll = (scrollOffset) => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollLeft += scrollOffset;
    }
  }

  const checkScrollPosition = () => {
    if (scrollableContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollableContainerRef.current 
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollableContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition)
      checkScrollPosition()
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollPosition)
      }
    }
  }, [])

  return (
    <div className='mt-[3rem] relative'>
      {showLeftArrow && (
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white  p-2 rounded-full shadow-md z-10 text-white backdrop-filter backdrop-blur-md bg-opacity-10"
          onClick={() => scroll(-200)}
        >
          ←
        </button>
      )}
      <div 
        ref={scrollableContainerRef}
        className="flex overflow-x-auto gap-8 py-4 px-4 scrollbar-hide"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {ImageAndText.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="w-[20rem] flex flex-col gap-4">
              <div className="relative h-90 w-full">
                <Image 
                  src={item.imageUrl} 
                  alt={item.title}
                  width={400}
                  height={600}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {showRightArrow && (
        <button 
          className="absolute right-0 top-1/2 backdrop-filter backdrop-blur-md bg-opacity-10 transform   -translate-y-1/2 bg-white  p-2 rounded-full shadow-md z-10 text-white"
          onClick={() => scroll(200)}
        >
          →
        </button>
      )} 
    </div>
  )
}

export default Gallery