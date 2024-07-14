import React, {useState} from 'react'


export default function TextForm(props) {

  const handelUpclick=()=>{
    //console.log("handelUpclick is clikced" +text);
    let newTxt=text.toUpperCase();
    setText(newTxt);  
    props.showAlert("Converted to UpperCase!","success")
  }
  
  const handelOnchange=(event)=>{
    //console.log("handelOnchange");
    setText(event.target.value);
  }

    const handelExtraSpaces=()=>{
      let nextxt=text.split(/[ ]+/);
      setText(nextxt.join(" "));
      props.showAlert("Extra Spaces Removed!","success")
    }

  const handelclrpclick=()=>{
    //console.log("handelOnchange");
    let newtxt="";
    setText(newtxt);
    props.showAlert("Text Cleard!","success")
  }

  const handelLopclick=()=>{
    //console.log("handelUpclick is clikced" +text);
    let newTxt=text.toLowerCase();
    setText(newTxt);  
    props.showAlert("Converted to LowerCase!","success")
  }

  const handelCopy=()=> {
    var txt=document.getElementById('IP');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Text Copied to Clipboard!","success")
  }


  const[text, setText]= useState("");
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'#b29999':'white' , color: props.mode === 'dark'?'white':'black'}} onChange={handelOnchange} id="IP" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handelUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handelLopclick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handelclrpclick} >Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handelExtraSpaces} >Remove extra spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handelCopy} >Copy Text</button>

        
        {/* <button className="btn btn-primary mx-1" onClick={handelsenclick} >Sentence case</button> */}


    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Summary Of Text</h2>
      {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
      <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words</p>
      <p>{text === "" ? 0 :0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length === 0?'Enter some text to preview':text}</p>
    </div>
    </>
  )
}



