import React from "react";
import Top from "./Top";
import Side from "./Side";

const wData=(itemz,val)=>{
   return(
      
         <Top 
         key={itemz.number}
          number={itemz.number}
          image={itemz.image} 
          name={itemz.name}
          links={itemz.links}></Top>
     
        
   );
}


function Week(){
   const weeklyData=Side.filter((itemz)=>{
      if(itemz.category=='week'){
         return itemz
      }
   })
console.log('click weeksssssssssss',weeklyData)
   return(
      <div>
         {weeklyData.map(wData)}

      </div>
   )
}
export default Week;