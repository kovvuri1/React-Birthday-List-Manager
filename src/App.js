import React, { useState } from 'react';
import data from "./db.json"
function App() {
  let [state,setstate]=useState(data)
  return (
    <>
    <h1 style={{textAlign:"center",textTransform:"capitalize"}}>{state.length} birthday's today</h1>
    <div className='cards-container'>
        {state.map((x,y)=>{
            return(
                <>
                <div className=' card' key={y}>
                <img src={x.imgsrc} alt="userimage" className='card-img'/>
                <h5 className='card-name'>{x.name}</h5>
                
                <p className='card-date'>{x.bdate}</p>
                </div>
                </>
            )
        })}
    </div>
    <button onClick={()=>{setstate([])}} className='btn'>Clear All</button>
    </>
  );
}
export default App;
