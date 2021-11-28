import * as React from 'react'
import './layout.css'
import Header from '../Header/NavBar'
import Footer from '../Footer/Footer'

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

