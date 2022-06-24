import "./App.css";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import LandingPage from "./components/day5/landing";
// import Home from "./components/day5/home";
// import Contact from "./components/day5/contact";
// import NotFound from "./components/day5/notFound";
// import NavigationBar from "./components/day5/navigationBar";
// import About from "./components/day5/about";
// import RoutingParams from "./components/day6/routingParams";
// import SearchParams from "./components/day6/searchParams";
// import NavLinkComponent from './components/day6/NavLink';
  //  import UseEffectComponent from "./components/day7/useEffectComponent";
  //   import LifeCycleMethods from './components/day4/lifeCycleMethods';
  //   import { useState } from 'react';
// import { Component } from 'react';
// import ComponentPure from "./components/day9/pureComponent";
//  import ClickCounter from "./components/day10/clickCounter";
//  import RightClickCounter from "./components/day10/rightClickCounter";
//  import MouseHoverCounter from "./components/day10/mouseHoverCounter";
// import FetchComponent from "./components/day11/fetchComponent"; 
// import { useState } from 'react';


function App() {
  // const[name,setName]= useState("");

  // const getMessage = ()=>{
  //  if(name.length<8){
  //   return<h3>Password more than 8 words</h3>;
  //  }else if(name.length>12){
  //   return<h3>Password less than 12 words</h3>;
  //  }else{
  //   return <h3>Good</h3>
  //  }
  // }

  // const [showLifeCycleMethods, setShowCycleMethods] = useState(true);
  //  const [show, setShow]= useState(true);
  return (
    <div className="App">


      {/* <BrowserRouter>
      <NavigationBar/>
      <NavLinkComponent/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/electronics/:appliance" element={<RoutingParams/>}/>
        <Route path="/cars" element={<SearchParams/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="*" element={<NotFound/>}/>
      


      </Routes>
      </BrowserRouter>
     */}
      {/* {showLifeCycleMethods ? <UseEffectComponent /> : null}
      <button onClick={() => setShowCycleMethods (!showLifeCycleMethods ? setShowCycleMethods)}
      Show/Hide LifeCycleMethods
      </button>
      */}

{/* 
      <div>
        <label htmlFor="uncontrolled">Uncontrolled Component</label>
       <input id ="uncontrolled"/>
      </div>
      <div>
        <label htmlFor="controlled">Contrrolled Comppnent</label>
        <input id="controlled" value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      {getMessage()} */}
      {/* <ComponentPure/> */}
      
      {/* <ClickCounter/>
      <RightClickCounter/>
      <MouseHoverCounter/>
       */}
       {/* {show ? <FetchComponent/> :null}
     <button onClick={()=>setShow(!show)}>Show/Hide</button>

     <FetchComponent/> */}

    </div>
  );
}

export default App;