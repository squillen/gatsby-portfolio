import * as React from "react"
import { Link } from "gatsby"
import backArrow from '../src/images/svgs/arrows/straight-arrow-outline.svg'

const BackButton = () => {
  return (
    <Link to="/">
      <img className="button-arrow rotate180 back" src={backArrow} alt="back button" />
    </Link>
  )
}

export default BackButton
