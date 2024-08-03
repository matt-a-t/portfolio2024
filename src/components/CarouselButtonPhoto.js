import React, { useState } from 'react'
import ArrowButton from './ArrowButton';
import { GatsbyImage } from 'gatsby-plugin-image';

function CarouselButtonPhoto({ direction, onClick, photo, alt }) {
  const [prevEffect, setPrevEffect] = useState(false);
  const [nextEffect, setNextEffect] = useState(false);

  function clearAnimation() {
    setPrevEffect(false);
    setNextEffect(false);
  }

  function handleClick() {
    if (direction === 'left') {
      setPrevEffect(true);
    } else {
      setNextEffect(true);
    }
    onClick();
  }

  return (
    <button
      className={`
        size-1/4
        relative
        cursor-pointer
        duration-500
        bg-green-200
        ${prevEffect && 'animate-out slide-out-to-left-2'}
        ${nextEffect && 'animate-out slide-out-to-right-2'}
      `}
      onClick={handleClick}
      onAnimationEnd={() => clearAnimation()}
    >
      <ArrowButton direction={direction} onClick={onClick} />
      <GatsbyImage image={photo} alt={alt} />
    </button>
  );
}

export default CarouselButtonPhoto;