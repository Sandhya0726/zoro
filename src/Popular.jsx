
import React from "react";


function Popular(props){
    return(<>
     <div className='card'>
              <img src={props.imgsrc}></img>
              <h2>{props.title}</h2>
              <label>{props.text}</label>
                 <h4> {props.time}</h4>
             </div>
             </>);
}
              export default Popular;