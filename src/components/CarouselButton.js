import React from 'react'

function CarouselButton({ direction, onClick, photo, alt }) {
  return (
    <div
      className='size-1/4 relative cursor-pointer transition-all' onClick={handlePrevious}>
      <ArrowButton direction={direction} onClick={onClick} />
      <GatsbyImage image={photo} alt={alt} />
    </div>
  );
}

export default CarouselButton;