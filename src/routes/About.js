import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Heroimage2 from '../components/Heroimage2'
import AboutContent from '../components/AboutContent'
import WorkEX from '../components/WorkEX'

const About = () => {
  return (
    <div>
     <Navbar/>
     <Heroimage2 heading="ABOUT."text="I'm a friendly Data Scientist"/>
     <AboutContent/>
     <WorkEX/>
     <Footer/>
    </div>
  )
}

export default About
