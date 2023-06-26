
import React from "react";




function Popular(props){
    return(<>
     <div className='card' >
              <img src={props.imgsrc} alt="img"></img>
              <a href={props.link} target="blank">
              <h2 >{props.title}</h2>
              </a>
              
              <div className="text" ><label >{props.text} </label></div>
                 <h4> {props.time}</h4>
                 
             </div>
             </>);
}
              export default Popular;