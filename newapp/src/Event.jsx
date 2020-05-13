import React from 'react'

function Event (){
     function clickHandler(){
         console.log('Function Click')
     }
    return(
        <div>
        <button onClick={clickHandler}>Click</button>
        </div>
    );
}
export default Event