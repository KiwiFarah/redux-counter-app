import React from 'react'

function Index() {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <h1>Redux Counter</h1>
        <button style={{
            backgroundColor:"green",
            fontSize:"18px",
            color:"white",
            padding:"10px 30px"
        }}>Increment</button>
        <p  style={{
            fontSize:"20px"
        }}>0</p>

        <button
        style={{
            backgroundColor:"red",
            color:"white",
            fontSize:"18px",
            padding:"10px 30px"
        }}>Decrement</button>
    </div>
  )
}

export default Index