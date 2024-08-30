'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

const ScrollableGallery = ({ ImageAndText }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      // Check initial scroll position
      checkScrollPosition(); 
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="relative">
      {showLeftArrow && (
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md z-10"
          onClick={() => scroll(-300)}
        >
          ←
        </button>
      )}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-8 py-4 px-4 scrollbar-hide"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {ImageAndText.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="w-64 flex flex-col gap-4">
              <div className="relative h-40 w-full">
                <Image 
                  src={item.imageUrl} 
                  alt={item.title}
                  layout="fill"
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
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md z-10"
          onClick={() => scroll(300)}
        >
          →
        </button>
      )}
    </div>
  );
};

export default ScrollableGallery;