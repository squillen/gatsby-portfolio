import * as React from "react"
import curveArrow from '../src/images/svgs/curve-arrow.svg';
import slightCurveArrow from '../src/images/svgs/slight-curve-arrow-outline.svg';

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading-primary--main">Sean Quillen</h1>
      <img className="arrow rotate45 down header-turn-arrow" src={slightCurveArrow} alt="arrow point down to Sean Quillen" />
      <img className="arrow header-curve-arrow" src={curveArrow} alt="arrow point down to Sean Quillen" />
    </header>
  )
}

export default Header
