import React, { useState } from 'react'
import {Accordion, Button} from "react-bootstrap"
export default function About() {

  const  [myStyle, setMyStyle] = useState({
    color : "white",
    backgroundColor : "black"
  })

  
  const [btntext, setBtnText] = useState("Enable White Mode")


  const toggleStyle = () => {
    if(myStyle.color === 'black'){
      setMyStyle({
        color : 'white',
        backgroundColor : 'black'
      })
      setBtnText("Enable Light Mode")
    }
    else{
      setMyStyle({
        color : 'black',
        backgroundColor : 'white'
      })
      setBtnText("Enable dark Mode")
      
     }
  }





  return (
    <div className='container my-5'  style={myStyle}>
      <h1> About us </h1>
      <Accordion defaultActiveKey="0" > 
      <Accordion.Item eventKey="0" style={myStyle}>
        <Accordion.Header >Accordion Item #1</Accordion.Header>
        <Accordion.Body >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={myStyle}>
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={myStyle}>
        <Accordion.Header >Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

      <Button variant="dark" className='my-3' onClick={toggleStyle}>{btntext}</Button>
    </div>
  )
}
