import {useState} from "react";

import counterHoc from './counterHoc';

const MouseHoverCounter = (props) => {
    const [counter, handleIncrement] = props;
    return(
        <>
        <h1>MouseHover Counter : {counter}</h1>
        <h1 onMouseOver={handleIncrement}>Click Counter</h1>
         <h2>Name: {props.name}</h2>
        </>
    )
}
const EnhancedClickCounter = counterHoc(MouseHoverCounter,7)


export default EnhancedClickCounter;