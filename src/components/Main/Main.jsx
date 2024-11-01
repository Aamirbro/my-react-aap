import { type } from "@testing-library/user-event/dist/type";
import React, {useState} from "react"
import Button from 'react-bootstrap/Button';


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked")
        let up = text.toUpperCase()
        setText(up)
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked")
        let low = text.toLowerCase()
        setText(low)
    }
    const handleClearClick = () => {
        // console.log("Clear Text Button")
        setText("")
    }

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    }

    const [alert, setAlert] = useState(null)

    const showAlert = (message, type)=>{
            setAlert({
                msg: message,
                type: type
            })
    }
     


    const [text, setText] = useState("Enter Text Here") 


    return (
        <div>
            <div className="container">
            <h1> {props.heading} </h1>
            <h1> TextArea </h1>
            <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} props={text}>  </textarea>
            <Button variant="outline-success mx-5"    onClick={handleUpClick}>Convert to Uppercase</Button>{' '}
            <Button variant="outline-danger mx-5"    onClick={handleLoClick}>Convert to Lowercase</Button>{' '}
            <Button variant="outline-info  my-3"    onClick={handleClearClick}>Clear Text</Button>{' '}

            </div>
            <div className="container my-3">
                <h1> your text summary  </h1>
                <p> {text.split(" ").length} words and {text.length} charactors </p>
                <p> {0.008 * text.split(" ").length} reading minutes </p>
                <h6> {text} </h6>
            </div>
        </div>
    )
}