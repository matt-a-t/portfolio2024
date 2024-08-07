import React from "react";
import WorkItem from "../components/WorkItem";

function Work() {
  return (
    <>
      <WorkItem title='Lead Engineer at Cornerstone Information Systems'
        description='I am currently a Lead Engineer at Cornerstone Information Systems, where I lead a 
          team of engineers in building and maintaining a suite of travel management applications.
          I am responsible for the overall technical direction of the team, as well as the
          professional development of my team members. I am also responsible for the design and
          implementation of several key features in our applications.'
        link='https://www.ciswired.com'
      />
      <WorkItem title='YouMineTubeCraft'
        description='YouMineTubeCraft is a project that I started with a friend of mine. It is a Discord bot
          that checks for a youtube channel subscription and allows a user to be whitelisted on a Nodecraft
          server. The bot is written in Node.js and uses the Discord.js library. The bot is currently in development
          and is not yet available for public use but the code is open source.'
        link='https://github.com/matt-a-t/YouMineTubeCraft'
      />
      <WorkItem title='City of Bloomington uReport Client'
        description='Working with two other very talented developers, I entered a winning project into the Bloomington Civic Code Challenge at
          The Combine 2018. The project was built in React with Google Maps and Google Places APIs and meant to be a "drop in" widget
          on the city of Bloomington website. The app allows users to report maintenance issues to the city. We also built a
          GraphQL wrapper for the open311 API that the city uses to receive reports.'
        link='https://github.com/CivicCode/uReport-client'
      />
      <WorkItem title='Hoosier Action Squarespace Site'
        description='Hoosier Action is a grassroots organization that works to build power in working class communities in Indiana.
          I built their website using Squarespace and helped them to establish a brand identity. Although my work is no longer
          in use, I would encourage you to follow the link and check out the work that they are doing.'
        link='https://www.hoosieraction.org'
      />
      <WorkItem title='PetfinderQL'
        description='This project was something I worked on to teach myself how to setup GraphQL with Node.js. Petfinder has a service to
          query their database of adoptable pets via a REST API. I exposed this API via GraphQL, allowing for the data to be
          returned in a much cleaner format that allows for the consumer to specifically request the data that they would like to
          use. I had this running on AWS, but it was costing me money so I have since taken it down. The link below will show the
          source code of the project.'
        link='https://github.com/matt-a-t/petfinderQL'
      />
    </>
  );
}

export default Work;