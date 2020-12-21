import * as React from "react"
import BackButton from './BackButton'
import rightCurve from '../src/images/svgs/arrows/slight-curve-arrow-outline-black.svg';
import leftCurve from '../src/images/svgs/arrows/curve-arrow-black.svg';


const DynamicHeader = ({ header, subHeader, id = '', headerArrowRight, subHeaderRight }) => {
  return (
    <header className="dynamicHeader-container" id={id}>
      <BackButton />
      <div className="center">
        <div className="header-container">
          {!headerArrowRight && <img src={leftCurve} alt="" className="arrow down rotate90 arrow-header-left" />}
          <h1 className="heading-primary--main">{header}</h1>
          {headerArrowRight && <img src={rightCurve} alt="" className="arrow down rotate75 arrow-header-right" />}
        </div>
        {subHeader && (
          <div className="sub-header-container">
            {!subHeaderRight && <img src={rightCurve} alt="" className="arrow down rotate75 arrow-header-right" />}
            <h2 className="heading-primary--sub">{subHeader}</h2>
            {subHeaderRight && <img src={rightCurve} alt="" className="arrow down rotate75 arrow-header-left" />}
          </div>
        )}
      </div>
    </header>
  )
}

export default DynamicHeader