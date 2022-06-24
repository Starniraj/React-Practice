import { useState, useEffect} from 'react';

const EventHandling = () => {

      const [inputVal, setInputVal] = useState('');

      useEffect(()=>{
        document.addEventListener('keydown',handleKeyDown);
      },[])

      const handleKeyDown =(e)=> 
      console.log("===On key Down===", e.keyCode);

      
       const handleClick = () =>{
        console.log("clicked");
       }

       const handleChange = (e) =>{
        // console.log("event");
        setInputVal(e.target.value);
       }


    return(
    <>
    <button onclick={handleClick}>Click me</button>
    <input value={inputVal} onChange ={handleChange} />

    <h1 onMouseOver={()=>
        console.log("=================Mouse Hovered")}>Welcome to Prepbytes</h1>
    <h1 onKeyDown={()=>console.log("===On key down===")}>This is a On Key Down Event</h1>
    </>
    )
}

export default EventHandling;