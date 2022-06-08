import React from 'react'
import Navbar from '../components/Navbar/index.js'

const Signin = () => {
  return (
    <>
      <Navbar />
      
      <div style={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          height: "90vh"
      }}>
        <h1>Signin</h1>
      </div>
    </>
  )
}

export default Signin
