import React from 'react';
import Top from './Top';
import Side from './Side';

const zData=(items,unique)=>{
    return(
        
        <Top 
        key={items.number}
        number={items.number}
        image={items.image} 
        name={items.name}
        links={items.links}>
        </Top>


    )
}


function Daily(){

 const dailyData = Side.filter((items)=>{
        if(items.category=='Today'){
            return items;
        }
    })


    return(
        <div>
            
            {dailyData.map(zData)}

        </div>
    )
};

export default Daily;