import * as React from "react"
import curveArrow from '../src/images/svgs/arrows/curve-arrow.svg';
import slightCurveArrow from '../src/images/svgs/arrows/slight-curve-arrow-outline.svg';

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading-primary--main header-heading">Sean Quillen</h1>
      <img className="arrow rotate75 header-turn-arrow" src={slightCurveArrow} alt="arrow point down to Sean Quillen" />
      {/* <img className="arrow header-curve-arrow" src={curveArrow} alt="arrow point down to Sean Quillen" /> */}
    </header>
  )
}

export default Header
