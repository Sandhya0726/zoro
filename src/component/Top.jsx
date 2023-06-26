import React from "react";


function Top(props){
  
    return(
        <>
         <div className="series">
                <div className="index">{props.number}</div>
                <div className="pics"> 
                <img src={props.image} alt="img"/></div>
                <div className="names">
                    <a href={props.links} target="blank" style={{textDecoration:'none'}}><label>{props.name}</label></a>
                    </div>
                
            </div>
        </>
    )
}

export default Top;