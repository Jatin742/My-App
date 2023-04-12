import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked",text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Upper Case","success");
    }
    const handleLowClick=()=>{
        console.log("Lowercase was clicked",text);
        let newText=text.toLowerCase();
        props.showAlert("Coverted to Lower Case","success");
        setText(newText);
    }
    const handleClearClick=()=>{
        console.log("Clear Text was clicked",text);
        let newText='';
        props.showAlert("Text Cleared","success");
        setText(newText);
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clip board","success");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    // setText('new Text');//correct way to change the state
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-2">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text seummary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>

        <p>{(text.length>0)?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
