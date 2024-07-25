import React from 'react'
import './About.css'
import school from '../../assets/school.jpg'
import com_lab from '../../assets/com_lab.jpg'
import classroom from '../../assets/classroom.jpg'
import library from '../../assets/library.jpg'
import sport from '../../assets/sport.jpg'

const About = () => {
  return (
    <>
    <h1>About Us</h1>
    <div className='school'>
    <img src={school}  width="388" height="300"  />
    <div>
      <div className='data'>
      <h2 >History</h2>
      <p>Founded in 1985, Springdale Public School has been 
        dedicated to providing quality education and holistic 
        development to students.</p>
      </div>
      
    </div>
    </div>

    <div className='school'>
    <div>
      <div className='data'>
      <h2 >Vision</h2>
      <p>To create a learning environment that fosters 
        academic excellence, critical thinking, and ethical values.</p>
      </div> 
    </div>
    <img src={school}  width="388" height="300"  />
    </div>

    <div className='school'>
    <img src={school}  width="388" height="300"  />
    <div>
      <div className='data'>
      <h2 >Mission</h2>
      <p>To empower students with the knowledge, skills, and values 
        needed to thrive in a dynamic world.</p>
      </div> 
    </div>
    </div>

    <div className='school'>
    <div>
      <div className='data'>
      <h2 >Principle's Message</h2>
      <p>At Springdale, we believe in nurturing the potential of every 
        student and guiding them towards a successful future.</p>
      </div> 
    </div>
    <img src={school}  width="388" height="300"  />
    </div>

    <h1> Infrastructure & Facilities</h1>
    
    <div className='school'>
    <img src={com_lab}  width="388" height="300"  />
    <div>
      <div className='data'>
      <h2 >Principle's Message</h2>
      <p>At Springdale, we believe in nurturing the potential of every 
        student and guiding them towards a successful future.</p>
    </div>
      </div> 
    </div>
    <div className='school'>
    <div>
      <div className='data'>
      <h2 >Principle's Message</h2>
      <p>At Springdale, we believe in nurturing the potential of every 
        student and guiding them towards a successful future.</p>
    </div>
      </div> 
    <img src={classroom}  width="388" height="300"  />
    </div>

    <div className='school'>
    <img src={library}  width="388" height="300"  />
    <div>
      <div className='data'>
      <h2 >Principle's Message</h2>
      <p>At Springdale, we believe in nurturing the potential of every 
        student and guiding them towards a successful future.</p>
    </div>
      </div> 
    </div>

    <div className='school'>
    <div>
      <div className='data'>
      <h2 >Principle's Message</h2>
      <p>At Springdale, we believe in nurturing the potential of every 
        student and guiding them towards a successful future.</p>
    </div>
      </div> 
    <img src={sport}  width="388" height="300"  />
    </div>
    </>
  )
}

export default About