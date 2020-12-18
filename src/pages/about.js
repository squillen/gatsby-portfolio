import * as React from "react"
import backArrow from '../images/svgs/straight-arrow-outline.svg'
import '../../styles/main.scss'
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <main className="container">
      <header className="header-container">
        <Link to="/">
          <img className="back-arrow back" src={backArrow} alt="back button" />
        </Link>
        <div className="center">
          <h1 className="heading-primary--main">About</h1>
          <h2 className="heading-primary--sub">me</h2>
        </div>
      </header>
      <section className="about">
        <p>I live in Austin, TX.</p>
        <p>I am a software developer.</p>
        
        
      </section>
    </main>
  )
}

export default AboutPage
