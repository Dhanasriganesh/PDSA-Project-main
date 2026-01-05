import React from 'react'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import Routers from '../routers/Routers.jsx'
import ScrollToTop from '../ScrollToTop.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
function Layout() {
  return (
    <Router>
        <Header/>
        <div>
            <Routers/>
        </div> 
        <Footer/>
        <ScrollToTop />
    </Router>
  )
}

export default Layout
