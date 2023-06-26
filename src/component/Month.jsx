import React from "react";
import Top from "./Top";
import Side from "./Side";

const fData=(item,index)=>{
    return(
        
         <Top 
        key={item.number}
         number={item.number}
         image={item.image} 
         name={item.name}
         links={item.links}>
         </Top>
        
        
    )
}


function Month(){
    const monthlyData=Side.filter((item)=>{
        if(item.category=='month')
        
        {
            return item
            
        }
    

    })

  // console.log('monthlyData',monthlyData)


  return (
    <div>
         {monthlyData.map(fData)}
    </div>
  )
 
   
}
export default Month;