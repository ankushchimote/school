import React from 'react'
import './Home.css'
import library from '../../assets/library.jpg'
import logo from '../../assets/logo.png'
import sday from '../../assets/sday.jpg'
import cfest from '../../assets/cfest.jpg'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Home = () => {

  return (
    <>
    <div className='hy'>
      <h1>Springdale Public School</h1>
      <img src={logo}  />
      <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p><br /><br />
      <h2>Highlights</h2><br /><br />
    </div>
     <Slide>
            <div className="each-slide-effect">
                <div style={{ width:'100%',height:'300px' }}>
                    <img src={library} alt="" />
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ width:'100%',height:'300px' }}>
                    <img src={sday} alt="" />
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ width:'100%',height:'300px' }}>
                    <img src={cfest} alt="" />
                </div>
            </div>
        </Slide><br /><br /><br /><br /><br />
    </>
  )
}

export default Home