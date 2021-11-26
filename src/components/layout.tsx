import * as React from "react"
import Header from "./Header/NavBar"
import "./layout.css"
import Footer from "./Footer/Footer"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header />
      <div className="main-wrapper">
        <main className="main">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
