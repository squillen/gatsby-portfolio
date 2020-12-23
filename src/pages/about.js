import * as React from "react"
import { Link } from 'gatsby'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import '../../styles/main.scss'
import DynamicHeader from '../../components/DynamicHeader'

const AboutPage = () => {
  return (
    <main className="about-container">
      <DynamicHeader header="About" subHeader="me" subHeaderRight />
      <section className="about-info">
        <div className="about-picture" />
        <div className="about-info-section-container">
          <p>I&apos;m a web developer living in Austin, TX.</p>
          <p>If given the choice, I will choose enchiladas and margaritas. Always.</p>
        </div>
        <div className="about-info-section-container">
          <p>Currently, I like to:</p>
          <ul>
            <li>- Hike, partly for the nature but mostly for the silence.</li>
            <li>- <Link to="/photos">Take photos</Link>, but usually not when I hike.</li>
            <li>- Make music, but only for myself to listen to.</li>
          </ul>
        </div>
        <div className="about-info-section-container">
        <p>In the future, I&apos;d like to:</p>
          <ul>
            <li>- Live in the present.</li>
            <li>- Figure out time travel. So far I&apos;ve only figured out how to go forward. Halfway there!</li>
            <li>- Connect with people on a deeper level.</li>
          </ul>
        </div>
        <div className="about-info-section-container">
          <p>If I had <FaInstagram /> or <FaTwitter /> , this is where&apos;d I&apos;d put them.</p>
        </div>
        <div className="about-info-section-container">
          <p>Is this quirky and clever enough for the internet yet?</p>
          <p>If not, here&apos;s a haiku:</p>
        </div>
        <div className="blockquote">
          <blockquote>A soft yet proud voice.</blockquote>
          <blockquote>Fair, kind, and slightly anxious.</blockquote>
          <blockquote>This is who I am.</blockquote>
        </div>
        <div className="about-info-section-container">
          <p>haiku snaps.</p>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
