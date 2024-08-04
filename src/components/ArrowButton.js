import React from 'react'

function ArrowButton({ direction, onClick }) {
  return (
    <span
      className={`
        text-4xl
        text-green-600
        absolute 
        ${direction}-0
        z-10
        w-8
        h-full
        flex
        items-center
        justify-center
      bg-green-300
      `}
      onClick={onClick}
    >
      {direction === 'left' ? '<' : '>'}
    </span>
  );
}

export default ArrowButton