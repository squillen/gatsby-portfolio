import * as React from "react"
import '../../styles/main.scss'
import DynamicHeader from '../../components/DynamicHeader'

const AboutPage = () => {
  return (
    <main className="container">
    <DynamicHeader header="About" />
      <section className="about">
        <p>I live in Austin, TX.</p>
        <p>I am a software developer.</p>
        <br /><br />
        <p>I like to make music.</p>
        <p>I like to listen to music.</p>
        <br /><br />
        <p>If given the choice, I will choose enchiladas and margaritas. Always.</p>
        <p>If I had instagram or twitter, this is where'd I'd put them.</p>
        <br /><br />
        <p>Is this quirky and clever enough yet?</p>
        <p>If not, here's a haiku:</p>
        
      </section>
    </main>
  )
}

export default AboutPage
