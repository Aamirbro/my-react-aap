import Navbar from"./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import About from "./components/About"
import Alert from "./components/Alert"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"


const App = () =>{

//   const [mode, setMode] = useState('light');

//   const toggleMode = () =>{
//     if (mode === 'light'){
//       setMode('dark')
//       document.body.style.backgroundColor = 'black'
//     }
//     else{ 
//       setMode('light')
//       document.body.style.backgroundColor = 'white'
//     }
//   }

  
  const design = (

    <>

        <Navbar title="Textutils"  />
        <Alert alert="this is my lol ka ladka"/>
        <Main />
        <About heading="Enter the text to inside the textbox" />
        <Footer />

    </>
  ) 
  return design;
}
export default App;