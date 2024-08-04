import * as React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills"
import Work from "../sections/Work"

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
        <Work />
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
