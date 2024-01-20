import React ,{useState}from 'react'

export default function TestForm(props) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleCopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    setButtonClicked(true);
    props.showAlert("copy to clipboard!","success");
    
  }
  const handleExtraSpace=()=>{
    if(text===""){
      props.showAlert("write something in textarea","warning");
    }else{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    setButtonClicked(true);
    props.showAlert("Extra spaces removed","success");
    }
  }
  const handleUpClick=()=>{
    if(text===""){
      props.showAlert("write something in textarea","warning");
    }else{
    //console.log("Uppercase was clicked: "_text);
    let newText=text.toUpperCase();
    //setText("you have clicked on handlr click")
    
    setText(newText)
    setButtonClicked(true);
    props.showAlert("converted to upper case","success");
    }
  }
  const handleloClick=()=>{
    if(text===""){
      props.showAlert("write something in textarea","warning");
    }else{
    let newText=text.toLowerCase();
    setText(newText)
    setButtonClicked(true);
    props.showAlert("converted to lower case","success");
    }
  }
  const handleOnChange=(event)=>{
    //console.log("on change");
    setText(event.target.value);
    setButtonClicked(false);
    
  }
  const handleclearClick=()=>{
    if(text===""){
      props.showAlert("write something in textarea","warning");
    }else{
    let newText="";
    setText(newText)
    setButtonClicked(false);
    props.showAlert("text Cleared","success");
    }
  }
  const[text,setText]=useState('');
  //text="new Text";//wrong way to change the state
  //setText("new Text")//Correct way to change state
  const wordCount = text
    .split(' ')
    .filter((word) => word.trim() !== '')
    .length;
  return (
    <>
    <div className='container'>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      
          <h1>{props.heading}</h1>
          <div className='md-3'>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8" placeholder='Write Something here'></textarea>
          </div> 
          <button className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>

        
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>
            {wordCount} words and {text.length} characters
          </p>
          <p>{(0.008 * wordCount).toFixed(2)} minutes read </p>
          <h2>Preview</h2>
          {buttonClicked ? (
          <strong><p style={{ wordWrap: 'break-word',color:'#0d6efd' }}>{text.length > 0 ? text : "Enter something to preview"}</p></strong>
            ) : (
              <p>Click a button to preview</p>
            )}
          {/* <p style={{ wordWrap: 'break-word' }}>{text.length>0?text:"Enter something to preview" }</p> */}
          
       </div>
       </div>
        
  

  </>
  )
}
