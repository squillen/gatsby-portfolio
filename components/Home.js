import * as React from "react"
import { Link } from "gatsby"
import straightArrow from '../src/images/svgs/straight-arrow.svg';
import slightCurveArrow from '../src/images/svgs/slight-curve-arrow-outline.svg';
import envelope from '../src/images/svgs/envelope.svg';
import github from '../src/images/svgs/github.svg';
import linkedin from '../src/images/svgs/linkedin.svg';

const Home = () => {
  return (
    <section className="section-container">
      <section className="section-container-about">
        <div className="section-text-container">
          <h2 className="description-text">writes</h2>
          <img className="arrow rotate90 about-arrow" src={straightArrow} alt="arrow pointing down to the code section" />
        </div>
        <img className="arrow rotate180 about-arrow" src={straightArrow} alt="arrow pointing left to the word 'writes'"/>
        <Link className="section-block-about" data-hover="about" to="/about">
        </Link>
      </section>
      <section className="section-container-about">
        <Link className="section-block-code" data-hover="code" to="/code"></Link>
          <img className="arrow about-arrow" src={straightArrow} alt="arrow pointing down to the code section" />
          <div className="section-text-container">
            <h2 className="description-text">and takes</h2>
            <img className="arrow rotate90 about-arrow" src={straightArrow} alt="arrow pointing down to the word 'photos'"/>
          </div>
      </section>
      <section className="section-container-photos">
        <div></div>
        <Link data-hover="photos." className="section-block-photos" to="/photos"></Link>
      </section>
      <section className="section-container-photos">
      <div className="section-text-container">
          <h2 className="description-text">say hi</h2>
          <img className="arrow rotate90 about-arrow" src={straightArrow} alt="arrow pointing left to the word 'writes'"/>
        </div>
      </section>
      <section className="section-container-contact">
        <a href=""><img className="contact-logo" src={github} alt="link to my github"/></a>
        <a href=""><img className="contact-logo" src={linkedin} alt="link to my linkedin"/></a>
        <a href=""><img className="contact-logo" src={envelope} alt="email me"/></a>
      </section>

      {/* <section className="section-main">
        <a href="#code"><section className="section-block-code">code</section></a>
        <a href="#photos"><section className="section-block-photos">photos</section></a>
        <a href="#about"><section className="section-block-about">about</section></a>
      </section>
      <section id="code"className="section-code">code</section>
      <section id="photos" className="section-photos">photos</section>
      <section id="about" className="section-about">about</section> */}
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