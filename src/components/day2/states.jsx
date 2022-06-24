import React, {useState} from 'react';

const States = () => {
  let counter = 0;

  const handleClick = () => {
    counter++;
    console.log("Counter :" + counter);
  }


  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={handleClick}>Increment</button>
     
    </div>
  );
}

export default States;
