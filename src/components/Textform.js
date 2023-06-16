import React, { useState } from 'react'


//useState is a type of hook where we can use to change our content by using this hook method

export default function Textform(props) {

  const UpperCaseConverter = () => {
    var newText = text.toUpperCase()
    setText(newText)
    props.ShowAlert("Hey Successfully Converted To Uppercase","Success")
  }

  const TextonChange = (event)=>{
    setText(event.target.value)
  }

  const LowerCaseConverter = () =>{
    var newText = text.toLowerCase()
    setText(newText)
    props.ShowAlert("Hey Successfully Converted To Lowercase","Success")
  }

  const ClearText = ()=>{
   var newtext = ""
   setText(newtext) 
   props.ShowAlert("Hey Your Text has been successfully cleared ","Success")
  }

  const CopyText = ()=>{
    var newtext = text

      // Copy the text inside the text field
      navigator.clipboard.writeText(newtext);
      props.ShowAlert("Text Has been copied successfully ","Success")
  }

  function textToSpeech(){

    //function to speak
    const Speech= new SpeechSynthesisUtterance();
    const message= text
    Speech.lang='en';
    Speech.text= message;
    window.speechSynthesis.speak(Speech);
    props.ShowAlert("Please wait a sec we are we are working...","Success")
}

  const [text, setText] = useState("")
  console.log(text)

  return (
    <>
    <div className='container'>
      
      <div className="mb-3">
        <label htmlFor="name" className="form-label my-3"><h1>Enter Your Text</h1></label> <br />
        <textarea id="name" onChange={TextonChange} value={text} name="name" rows="6" cols="100"></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick={UpperCaseConverter}>Covert to Uppercase</button>  <button type="submit" className="btn btn-primary mx-3" onClick={LowerCaseConverter}>Covert to LowerCase </button> <button className='btn btn-primary mx-3' onClick={CopyText}>Copy</button> <button className="btn btn-success mx-3" onClick={textToSpeech}>Speak</button> <button className='btn btn-secondary' onClick={ClearText}>Clear</button>
    </div>
    
    
    <div className="container my-3">6
      <h4>Text Summary</h4>
      {/* find no of char and words */}
      <p>{text.split(" ").length} Word {text.length} Character</p>
      {/* minutes to take reading */}
      <p>{0.008 * text.split(" ").length} Times Take To Read</p>
      {/* Read your Textr Here */}
      <h4 className='bg-secondary'>Preview</h4>
      <i>{text}</i>
    </div>
    </>
  )
}
