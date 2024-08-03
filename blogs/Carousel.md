# Tailwind CSS Carousel

## What am I doing?

I want to build a carousel for my portfolio website consisting of numerous pictures. These are personal photos to personalize the experience for visitors. They are my digital "wallet photos".

## Should you use a carousel?

(Probably not.)[https://www.nngroup.com/articles/designing-effective-carousels/]

My use case is different than most in the article. It my final piece of content, allowing those still looking to have more to look through.

## Am I playing Baldur's Gate with my partner while writing this?

I don't see how that's relevant.

## Steps

- Start with old photo section

```
      <div className='flex place-items-center'>
        <div className='w-1/3'>
          <StaticImage
            src="../images/pablo-bibi.jpeg"
            alt="Pablo and Bibi laying in bed looking out the window"
            loading='lazy'
            layout='fullWidth'
          />
        </div>
        <div className='w-1/3'>
          <StaticImage
            src="../images/nym.jpeg"
            alt="Nym on a hike with me in the woods"
            loading='lazy'
            layout='fullWidth'
          />
        </div>
        <div className='w-1/3'>
          <StaticImage
            src="../images/pablo.jpeg"
            alt="Nym and Bibi laying on the couch together"
            loading='lazy'
            layout='fullWidth'
          />
        </div>
      </div>
      <div className='flex place-items-center'>
        <div className='w-1/2'>
          <StaticImage
            src='../images/nym2.jpeg'
            alt="All 3 dogs laying on the floor together"
            loading='lazy'
            layout='fullWidth'
          />
        </div>
        <div className='w-1/2'>
          <StaticImage
            src='../images/chloe-bibi.jpeg'
            alt="Chloe and Bibi at the pumpkin patch together"
            loading='lazy'
            layout='fullWidth'
          />
        </div>
      </div>
```

We're going to layout this differently. It will be the right half on desktop, with the text for my about me on the left. We will make it responsive so it stacks with the description on mobile views.

Time for some Tailwind classes. To do this, we'll use `md:w-1/2` on the carosel and the about me text. I will then Object.keys the photoMap to render my images. When I put this in and look in my browser, I'm not seeing any images...

### Uh-oh, first problem:

I am now getting an error. My `gatsby-plugin-image` is warning me that `Could not find values for the following props at build time: src`. So something in the way that I am rendering the component isn't available when Gatsby is building. Interesting.

I am going to want to instead no longer use Gatsby's <StaticImage /> component and switch to using a page query to find out about the contents of the images directory and return it to the render method. I create a new directory, `/carousel/` and put my photos into this directory. I can then query the file system and render the photos.

```    
const data = useStaticQuery(graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "carousel"}}) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`);
```

Now I am mapping over the array of photos and rendering with <GatsbyImage />

```
const photos = data.allFile.edges;
```
and
```
{photos.map(photo => {
  const image = getImage(photo.node.childImageSharp);
  return (
    <GatsbyImage image={image} alt={photo.node.name} />
  )
})}
```

Next up, getting the styling right and only showing one picture at a time.

### Carouselling the caroursel

So how to decide which photo to show. First I looked up some designs on (Dribbble for carousels)[https://dribbble.com/tags/carousel]. I noticed that a number like to have the next and previous pictures, so I'd like to include that with the current photo. To accomplish this:

```
function Carousel() {
  const [active, setActive] = useState(0);

  const data = useStaticQuery(...queryFromAbove...);
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
```

After this, we have the implementation of CarouselButtonPhoto. 

```
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
```

And there it is. In my opinion less is more on the animation, and the small button movement lets the user know that their input has been recieved. This carosel will update based on the photos put into the carousel directory and cycle through as a component on a Gatsby site.

