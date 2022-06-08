import React from 'react'
import Navbar from '../components/Navbar/index.js'

const AboutUs = () => {
  return (
    <>
      <Navbar />
      
      <div style={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          height: "90vh"
      }}>
        <h1>About Us</h1>
      </div>
    </>
  )
}

export default AboutUs
