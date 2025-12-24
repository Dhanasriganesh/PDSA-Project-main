import React from 'react'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import Routers from '../routers/Routers.jsx'
import ScrollToTopOnRouteChange from '../ScrollToTopOnRouteChange.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
function Layout() {
  return (
    <Router>
        <ScrollToTopOnRouteChange />
        <Header/>
        <div>
            <Routers/>
        </div> 
        <Footer/>
    </Router>
  )
}

export default Layout
