import React from "react";


function Top(props){
    return(
        <>
         <div className="series">
                <div className="index">{props.number}</div>
                <div className="pics"> 
                <img src={props.image}/></div>
                <div className="names">{props.name}</div>
                
            </div>
        </>
    )
}

export default Top;