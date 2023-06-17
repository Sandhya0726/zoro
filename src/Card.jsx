
import React from "react";
import Popular from "./Popular";
import Top from "./Top";

function Card(){
    return( <>
        <div className='cards'>
           
          <div className='popular'>
            
           
            <Popular
            imgsrc='https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg'
            title='One Piece'
            text='This shows the love between two guys binod and hinata.'
            time='TV.23 min'/> 

            <Popular
              imgsrc='https://img.zorores.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg'
              title='Naruto:Shippuden'
              text='This shows the love between two guys binod and Zendaya.'
              time='TV.16 min'/>

            <Popular
              imgsrc='https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png'
              title='Demon Slayer: Kimetsu no ....'
              text='This shows the love between two guys binod and hinata.'
              time='TV.30min'/>
              
               <Popular
                 imgsrc='https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg'
                 title='Black Clover'
                 text='This shows the love between two guys binod and Zendaya.'
                 time='TV.25 min'/>
          </div>
          <div className='top'>
            <div className="telecast">
                <div className="today">Today</div>
                <div className="week">Week</div>
                <div className="month">Month</div>
            </div>
           <Top number= '01'
                image='https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg'
                name='One Piece'  />
                <hr/>

<Top number= '02'
                image='https://img.zorores.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg'
                name='Naruto:Shippuden'  />
            <hr/>
            <Top number= '03'
                image='https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png'
                name='Demon Slayer: Kimetsu no Yaiba Swordsmith..'  />
            <hr/>
            <Top number= '04'
                image='https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg'
                name='Black Clover'  />
            <hr/>
            <Top number= '05'
                image='https://img.zorores.com/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg'
                name='Bleach'  />
            

          </div>
          </div>
          </>
          )

}
           
             export default Card;