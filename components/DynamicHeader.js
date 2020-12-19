import * as React from "react"
import BackButton from './BackButton'

const DynamicHeader = ({ header, subHeader }) => {
  return (
    <header className="header-container">
      <BackButton />
      <div className="center">
        <h1 className="heading-primary--main">{header}</h1>
        {subHeader && (
          <h2 className="heading-primary--sub">{subHeader}</h2>
        )}
      </div>
    </header>
  )
}

export default DynamicHeader