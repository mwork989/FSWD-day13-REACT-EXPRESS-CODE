import { useState } from "react";

const CounterOne = () => {

    //primitive number is maintained in the count state
    const [count,setCount] = useState(0)

    const increaseClickCount = () => {
      setCount((prevCount)=> prevCount+1);
   
    };
    const decreaseClickCount = () => {
        setCount((prevCount)=> prevCount-1);
     
      };

    return ( 
        <>
            <h2>Counter one</h2>
            <p>No of clicks is {count}</p>
            <button onClick={increaseClickCount}>+</button>
            <button onClick={decreaseClickCount}>-</button>
        </>
     );
}
 
export default CounterOne;