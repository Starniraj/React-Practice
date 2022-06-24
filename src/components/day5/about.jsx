import {useNavigate}  from "react-router-dom"
 

const About =() =>{
    const navigate = useNavigate();
    return(
        <>
        <h1>Return About Component</h1>
        <button onClick={()=> navigate('/home')}> Navigate to home</button>
        </>
        )
}

export default About;