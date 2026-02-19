import { useState } from "react";

function CodeOne(){
  const [value,setValue]= useState(0)

    function increment() {
     
        setValue(value+1)
      
    }

    function decrement() {

      setValue(value-1)
    }
   return(
    <>
    <div >
  <button onClick={decrement} >Decrement</button> 
  <h1>{value}</h1>
  <button onClick={increment}  >Increment</button>
</div>
    </>
   )

}
 export default CodeOne;
 
