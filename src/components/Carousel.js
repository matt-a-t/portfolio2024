import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby';
import ArrowButton from './ArrowButton';
import CarouselButton from './CarouselButton';

function Carousel() {
  const [active, setActive] = useState(0);
  const [prevEffect, setPrevEffect] = useState(false);
  const [nextEffect, setNextEffect] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "carousel"}}) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1,
                transformOptions: { fit: COVER, cropFocus: ATTENTION }
              )
            }
          }
        }
      }
    }
  `);

  const photos = data.allFile.edges;
  const max = photos.length - 1;

  const next = active === max ? 0 : active + 1;
  const previous = active === 0 ? max : active - 1;

  function handleNext() {
    setNextEffect(true);
    setActive(next);
  }

  function handlePrevious() {
    setPrevEffect(true);
    setActive(previous);
  }

  const prevPhoto = getImage(photos[previous].node.childImageSharp);
  const activePhoto = getImage(photos[active].node.childImageSharp);
  const nextPhoto = getImage(photos[next].node.childImageSharp);

  return (
    <div className='w-full md:w-1/2 flex items-center'>
      <CarouselButton direction='left' onClick={handlePrevious} photo={prevPhoto} alt={photos[previous].node.name} />
      <div className='size-1/2'>
        <GatsbyImage image={activePhoto} alt={photos[active].node.name} />
      </div>
      <div className='size-1/4 relative cursor-pointer' onClick={handleNext}>
        <ArrowButton direction='right' onClick={handleNext} />
        <GatsbyImage image={nextPhoto} alt={photos[next].node.name} />
      </div>
    </div>
  );
}

export default Carousel;