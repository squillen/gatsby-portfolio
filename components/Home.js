import * as React from "react"
import { Link } from "gatsby"
import { FaRegHandPaper } from 'react-icons/fa'

// ARROWS
import straightArrow from '../src/images/svgs/arrows/straight-arrow.svg';
import slightCurve from '../src/images/svgs/arrows/slight-curve-arrow-outline.svg';
import wavyTurn from '../src/images/svgs/arrows/wavy-straight.svg';
import loopArrow from '../src/images/svgs/arrows/loop-arrow-straight.svg';
// ICONS
import envelope from '../src/images/svgs/icons/envelope.svg';
import github from '../src/images/svgs/icons/github.svg';
import linkedin from '../src/images/svgs/icons/linkedin.svg';

const Home = () => {
  return (
    <section className="section-container">
      <div className="mobile">
        <section className="section-container-about">
          {/* MY PICTURE */}
          <Link className="section-block-about" data-hover="about" to="/about"></Link>
          <div className="section-text-container">
            <img className="arrow rotate90 about-arrow" src={wavyTurn} alt="arrow pointing left to the word 'writes'"/>
            <div className="row-container">
            </div>
              <h2 className="description-text">writes</h2>
              <img className="arrow rotate90 about-arrow" src={loopArrow} alt="arrow pointing down to the code section" />
          </div>
        </section>
        <section className="section-container-about">
          {/* CODE PICTURE */}
          <Link className="section-block-code" data-hover="code" to="/code"></Link>
            <img className="arrow rotate90 about-arrow" src={wavyTurn} alt="arrow pointing down to the word 'photos'" />
            <div className="section-text-container">
              <h2 className="description-text">and takes</h2>
              <img className="arrow rotate90 about-arrow" src={loopArrow} alt="arrow pointing down to the photos section"/>
            </div>
        </section>
        <section className="section-container-photos">
          {/* PHOTOS PICTURE */}
          <Link data-hover="photos." className="section-block-photos" to="/photos"></Link>
        </section>
        <section className="section-container-contact">
          <div className="section-text-container">
            <h2 className="description-text">say hi</h2>
            <img className="arrow rotate90 about-arrow" src={straightArrow} alt="arrow pointing left to the word 'writes'"/>
          </div>
          <div className="contact-icons-container">
            <a href="https://www.github.com/squillen"><img className="contact-logo" src={github} alt="link to my github"/></a>
            <a href="https://www.linkedin.com/in/sean-quillen/"><img className="contact-logo" src={linkedin} alt="link to my linkedin"/></a>
            <a href="mailto: sean.r.quillen@gmail.com"><img className="contact-logo" src={envelope} alt="email me"/></a>
          </div>
        </section>
      </div>


      <div className="desktop">
        <section className="section-container-about">
          <div className="section-text-container">
            <h2 className="description-text">writes</h2>
            <img className="arrow rotate90 about-arrow" src={straightArrow} alt="arrow pointing down to the code section" />
          </div>
          <img className="arrow rotate180 about-arrow" src={straightArrow} alt="arrow pointing left to the word 'writes'"/>
          {/* MY PICTURE */}
          <Link className="section-block-about" data-hover="about" to="/about"></Link>
        </section>
        <section className="section-container-about">
          {/* CODE PICTURE */}
          <Link className="section-block-code" data-hover="code" to="/code"></Link>
            <img className="arrow about-arrow" src={straightArrow} alt="arrow pointing down to the code section" />
            <div className="section-text-container">
              <h2 className="description-text">and takes</h2>
              <img className="arrow rotate90 photos-arrow" src={slightCurve} alt="arrow pointing down to the word 'photos'"/>
            </div>
        </section>
        <section className="section-container-photos">
          <div className="section-text-container">
            <h2 className="description-text">say hi</h2>
            <img className="arrow rotate90 contact-arrow" src={slightCurve} alt="arrow pointing left to the word 'writes'"/>
          </div>
          {/* PHOTOS PICTURE */}
          <Link data-hover="photos." className="section-block-photos" to="/photos"></Link>
        </section>
        <section className="section-container-contact">
          <div className="contact-icons-container">
            <a href="https://www.github.com/squillen"><img className="contact-logo" src={github} alt="link to my github"/></a>
            <a href="https://www.linkedin.com/in/sean-quillen/"><img className="contact-logo" src={linkedin} alt="link to my linkedin"/></a>
            <a href="mailto: sean.r.quillen@gmail.com"><img className="contact-logo" src={envelope} alt="email me"/></a>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Home


// COLUMN CHEAT SHEET
{/* <main className="grid">
      <div className="row">
        <div className="col-1-of-2">col 1 of 2</div>
        <div className="col-1-of-2">col 1 of 2</div>
      </div>
      <div className="row">
        <div className="col-1-of-3">col 1 of 3</div>
        <div className="col-1-of-3">col 1 of 3</div>
        <div className="col-1-of-3">col 1 of 3</div>
      </div>
      <div className="row">
        <div className="col-2-of-3">col 2 of 3</div>
        <div className="col-1-of-3">col 1 of 3</div>
      </div>
      <div className="row">
        <div className="col-2-of-4">col 2 of 4</div>
        <div className="col-1-of-4">row 4 col 2</div>
        <div className="col-1-of-4">row 4 col 3</div>
      </div>
      <div className="row">
        <div className="col-3-of-4">col 3 of 4</div>
        <div className="col-1-of-4">col 1 of 4</div>
      </div>
    </main> */}