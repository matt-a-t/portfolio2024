import * as React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import WorkItem from "../components/WorkItem"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"

function IndexPage() {
  return (
    <main className='bg-white min-h-screen'>
      <Navbar />
      <Hero />
      <Section>
        <Header text='Skills' />
        <Skills />
      </Section>
      <Section>
        <Header text="Work" />
        <WorkItem title='Lead Engineer at Cornerstone Information Systems'
          description='I am currently a Lead Engineer at Cornerstone Information Systems, where I lead a 
          team of engineers in building and maintaining a suite of travel management applications.
          I am responsible for the overall technical direction of the team, as well as the
          professional development of my team members. I am also responsible for the design and
          implementation of several key features in our applications.'
          link='https://www.ciswired.com'
        />
        <WorkItem title='Craft Raft'
          description='Early in the ideation process, Craft Raft is a solution for crafters to share their tools with one another
          and allow new crafters to try out new hobbies without the upfront cost of buying all the tools.
          I am currently working on the MVP for this project and hope to launch it soon. Please stay tuned.'
          link='/craft-raft'
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
      </Section>
      <Section>
        <Header text="About Me" />
        <AboutMe />
      </Section>
    </main >
  )
}

export default IndexPage

const Header = (props) => (
  <h2 className="text-4xl text-green-600 py-12" id={props.text}>
    {props.text}
  </h2>
);

const Section = (props) => <section className="p-10">{props.children}</section>
export const Head = () => <title>Matt Armstrong</title>
