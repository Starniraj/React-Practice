import React from 'react';

class LifeCycleMethods extends React.Component {
    constructor(props){
        super(props);
        this.state={
            counter:1
        };
    }

    componentDidMount(){
        console.log("Component Did mount");
    }

    componentDidUpdate(){
        console.log("component Did Update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

     handleClick = () =>{
        this.setState ({counter: this.state.counter+1});

    }



    render(){
        return(
            <>
            <h1>Life Cycle Methods</h1>
            <h1>Counter: {this.state.counter}</h1>
            <button onClick={this.handleClick}> Counter</button>
           </>
        )
    }
}
export default LifeCycleMethods;