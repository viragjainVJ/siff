import React, {useState, useEffect} from 'react'
import '../css/Navbar.css';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../components/Home';
import Helpline from '../components/Helpline';
import Donate from '../components/Donate';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import WriteArticles from '../components/WriteArticles';
import Footer from '../footer/Footer';

export default function () {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
      <div className='MainPage'>
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/"  element={<Home/>}></Route>
                  <Route path="/call-helpline"  element={<Helpline/>}></Route>
                  <Route path="/donate"  element={<Donate/>}></Route>
                  <Route path="/faq"  element={<FAQ/>}></Route>
                  <Route path="/contact"  element={<Contact/>}></Route>
                  <Route path="/write-articles"  element={<WriteArticles/>}></Route>
              </Routes>
              <Footer />
          </Router>
      </div>
    
  )
}