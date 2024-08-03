import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby';
import CarouselButtonPhoto from './CarouselButtonPhoto';

function Carousel() {
  const [active, setActive] = useState(0);

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
  const isFirst = active === 0;
  const isLast = active === max;
  const previous = isFirst ? max : active - 1;
  const next = isLast ? 0 : active + 1;

  function handleNext() {
    setActive(next);
  }

  function handlePrevious() {
    setActive(previous);
  }

  const prevPhoto = getImage(photos[previous].node.childImageSharp);
  const activePhoto = getImage(photos[active].node.childImageSharp);
  const nextPhoto = getImage(photos[next].node.childImageSharp);

  return (
    <div className='w-full md:w-1/2 flex items-center'>
      <CarouselButtonPhoto direction='left' onClick={handlePrevious} photo={prevPhoto} alt={photos[previous].node.name} />
      <div className='size-1/2 bg-green-200'>
        <GatsbyImage image={activePhoto} alt={photos[active].node.name} />
      </div>
      <CarouselButtonPhoto direction='right' onClick={handleNext} photo={nextPhoto} alt={photos[next].node.name} />
    </div>
  );
}

export default Carousel;