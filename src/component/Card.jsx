import React, { useState } from "react";
// import Popular from "./Popular";
import Top from "./Top";
import Sdata from "./Sdata";

import Daily from "./Daily";
import Month from "./Month";
import Week from "./Week";
import Heading from "./Heading";
import Popular from './Popular'



function date(val, index) {
  return (
    <Popular
    key={index}
      imgsrc={val.imgsrc}
      title={val.title}
      text={val.text}
      time={val.time}
      link={val.link}
    />
  );
}

function sBar(value, index) {
  return <Top 
  number={value.number} 
  image={value.image} 
  name={value.name}
  links={value.links} />;
}

const styleMe={
backgroundColor  :'greenyellow',
color:'black'
}

function Card() {
  const [anime, setAnime] = useState('Today');
  const handleWeek = () => {
    setAnime('week');
    console.log('clicked',anime);
  };
  const handleMonth = () => {
    setAnime('month');
  };
  const handleToday=()=>{
    setAnime('Today');
  }

  

  return (
    <>
    <Heading/>
      <div className="cards">
       <div className="popular">
        {Sdata.map(date)}</div>
        <div className="top">
          <div className="telecast">
          <button onClick={handleToday} style={anime=='Today'?styleMe:null}>Today</button>
            <button  onClick={handleWeek} style={anime=='week'?styleMe:null}>week </button>
          <button  onClick={handleMonth}style={anime=='month'?styleMe:null}>month </button>
          </div>
          <div className="wrap">
          {anime == "month" ? 
            <Month/>
           : anime == "week" ? 
             <Week/>
           : 
            <Daily/>
          }
          
          </div>
           

          {/* {Side.map(sBar)}; */}
        
          
          

        </div>
      </div>
    </>
  );
}

export default Card;

