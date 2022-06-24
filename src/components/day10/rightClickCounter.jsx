import {useState} from 'react';
import counterHoc from './counterHoc';


const RightClickCounter = (props) => {
    const [counter, handleIncrement] = props;
    return(
        <>
        <h1>RightClick Counter : {counter}</h1>
        <button onContextMenu={handleIncrement}> Right Click Counter</button>
         <h2>Name: {props.name}</h2>
        </>
    )
}
const EnhancedClickCounter = counterHoc(RightClickCounter,-5)


export default EnhancedClickCounter;