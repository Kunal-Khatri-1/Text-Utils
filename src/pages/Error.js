import React from 'react'
import Navbar from '../components/Navbar/index.js'

const Error = () => {
  return (
    <>
      <Navbar />
      
      <div style={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          height: "90vh"
      }}>
        <h1>Error 404 - Not Found</h1>
      </div>
    </>
  )
}

export default Error
