import { useState, useEffect } from "react";


const UseEffectComponent =() => {
    const[counter, setCounter] = useState(0);
    const[decrementCounter, setDecrementCounter] = useState(100);


useEffect(()=>{
    // document.addEventListener('keydown', handleKeydown);
    console.log("Increment counter varaible is updated");
    // return () => {
    //  document.addEventListener('keydown', handleKeydown);
    // }
},[counter]);

useEffect(()=>{
    console.log("Decrement counter varaible is updated");
    return () => console.log("Decrement useeffect - Component Unmounting");

},[decrementCounter]);

useEffect (()=> {
    return () => console.log("component is Unmounted");
},[]);

const handleKeydown = (e) => {
    console.log("key Pressed of code", e.keyCode);
}



return(
    <>
    <h1>Increment Counter : {counter}</h1>
    <button onClick={()=> setCounter(counter+1)}>Increment</button>
    <h1>Decrement Counter : {decrementCounter}</h1>
    <button onClick={()=> setDecrementCounter(decrementCounter-1)}>Decrement</button>
    </>
)

}

export default UseEffectComponent;