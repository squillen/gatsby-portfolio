import * as React from "react"
import DefaultHelmet from "../../components/DefaultHelmet"
import Header from "../../components/Header"
import Home from "../../components/Home"
import Footer from "../../components/Footer"
import '../../styles/main.scss'

const IndexPage = () => {
  return (
    <main className="index-container">
      <DefaultHelmet
        title="Sean Quillen Portfolio"
        description="Personal site for Austin-based web developer Sean Quillen, creator of the websites What Should I Do Tonight (whatshouldidotonight.com), cherryTree (cherrytree.cc), and Cleann Upp (cleannupp.com)."
      />
      <Header />
      <Home />
      <Footer />
    </main>
  )
}

export default IndexPage
