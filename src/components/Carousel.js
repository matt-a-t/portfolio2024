import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby';

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

  function handleNext() {
    if (active === max) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }

  function handlePrevious() {
    if (active === 0) {
      setActive(max);
    } else {
      setActive(active - 1);
    }
  }

  return (
    <div className='w-full md:w-1/2'>
      {photos.map((photo, i) => {
        const image = getImage(photo.node.childImageSharp);
        if (i !== active) return null;
        return (
          <GatsbyImage image={image} alt={photo.node.name} />
        )
      })}
      <div className='flex justify-around mt-4'>
        <button
          onClick={handlePrevious}
          className='bg-green-200 p-5'
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className='bg-green-200 p-5'
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;