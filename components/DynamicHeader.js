import * as React from "react"
import BackButton from './BackButton'
import rightCurve from '../src/images/svgs/arrows/slight-curve-arrow-outline-black.svg';
import rightCurveWhite from '../src/images/svgs/arrows/slight-curve-arrow-outline.svg';
import leftCurve from '../src/images/svgs/arrows/curve-arrow-black.svg';
import leftCurveWhite from '../src/images/svgs/arrows/curve-arrow.svg';


const DynamicHeader = ({ header, subHeader, id = '', headerArrowRight, subHeaderRight, white }) => {
  const leftArrow = white ? leftCurveWhite : leftCurve;
  const rightArrow = white ? rightCurveWhite : rightCurve;
  return (
    <header className="dynamicHeader-container" id={id}>
      <BackButton />
      <div className="center">
        <div className="header-container">
          {!headerArrowRight && <img src={leftArrow} alt="" className="arrow down rotate90 arrow-header-left" />}
          <h1 className="heading-primary--main">{header}</h1>
          {headerArrowRight && <img src={rightArrow} alt="" className="arrow down rotate75 arrow-header-right" />}
        </div>
        {subHeader && (
          <div className={`sub-header-container-${subHeaderRight ? 'right' : 'left'}`}>
            {!subHeaderRight && <img src={leftArrow} alt="" className="arrow down rotate75 arrow-header-left" />}
            <h2 className="heading-primary--sub">{subHeader}</h2>
            {subHeaderRight && <img src={rightArrow} alt="" className="arrow down rotate75 arrow-header-right" />}
          </div>
        )}
      </div>
    </header>
  )
}

export default DynamicHeader