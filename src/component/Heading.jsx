

import React from "react";

 const styleMe={
    height:70,
    width:230,
    marginTop:20,
    marginLeft:20,
    marginButton:0
 }



function Heading(){
 return(
    <>
    <div style={{backgroundColor:'black',height:100}} className="heading">
    <img src="https://zoro.to/images/logo.png" alt="logo" style={styleMe}></img>
    </div>
   
    </>
 )
};

export default Heading;