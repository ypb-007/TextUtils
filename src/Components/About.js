import React, { useState } from 'react'

    export default function About(props) {

        
            const[myStyle,]=useState({
                color : "black",
                backgroundColor:"white"
    
            });

            // // const[btntxt,setBtnText]=useState("Enable dark mode");

            // const ChangeToDarkmode=()=>{
            //     if(props.mode === "dark"){
            //         setmyStyle({
            //             color:"white",
            //             backgroundColor:"grey",
            //             // border: "white solid 1px"
            //         })
            //         // setBtnText("Enable light mode");
            //     }
            //     else{
            //         setmyStyle({
            //                 color:"black",
            //                 backgroundColor:"white",
                            
            //                 })
            //                 // setBtnText("Enable Dark mode");
                    
            //     }
            // }


       
         
    return (
        <div>
            
            <div className="accordion" style={props.mode === 'dark'? { color:"white",backgroundColor:"grey"}:{color:"black",backgroundColor:"white"}}  id="accordionExample" >
            <h1>About Us</h1>
            
                    <div className="accordion-item" style={myStyle} >
                        <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze your text
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
TextYB gives you way to analyze your text quickle and efficiently                        </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to Use
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    </div>
        
         
        
        </div>
    )
    }
