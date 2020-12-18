import * as React from "react"
import turnArrow from '../src/images/svgs/turn-arrow.svg';
import curveArrow from '../src/images/svgs/curve-arrow.svg';

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading-primary--main">Sean Quillen</h1>
      <img className="arrow rotate90 down header-turn-arrow" src={turnArrow} alt="arrow point down to Sean Quillen" />
      <img className="arrow header-curve-arrow" src={curveArrow} alt="arrow point down to Sean Quillen" />
    </header>
  )
}

export default Header
