import * as React from "react"
import { Helmet } from "react-helmet"

const DefaultHelmet = ({ title = 'Sean Quillen Portfolio', description }) => {
  return (
    <Helmet>
      <html lang="en" amp />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default DefaultHelmet