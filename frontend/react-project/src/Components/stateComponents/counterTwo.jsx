import { useState } from "react";

const CounterTwo = () => {

    //primitive number is maintained in the count state
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(5)

    const increaseClickCount = () => {
        setCount1((prevCount)=> prevCount+1);
   
    };
    const decreaseClickCount = () => {
        setCount1((prevCount)=> prevCount-1);
     
      };

      const increaseClickCountby5 = () => {
        setCount2((prevCount)=> prevCount+5);
     
      };
      const decreaseClickCountby5 = () => {
        setCount2((prevCount)=> prevCount-5);
       
        };

    return ( 
        <>
            <h2>Counter Two</h2>
            <p>No of clicks is {count1}</p>
            <h2>Counter Two</h2>
            <p>No of clicks is {count2}</p>
            <button onClick={increaseClickCount}>+</button>
            <button onClick={decreaseClickCount}>-</button>
            <button onClick={increaseClickCountby5}>+5</button>
            <button onClick={decreaseClickCountby5}>-5</button>
        </>
     );
}
 
export default CounterTwo;