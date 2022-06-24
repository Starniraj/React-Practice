import {Link} from 'react-router-dom';

const NavigationBar = ()=>{
    return(
        <div style = {{display:'flex', gap: '20px'}}>
            <Link to='/home'>Home</Link>
            <Link to='/contact'>Contact</Link>

        </div>
    )
}

export default NavigationBar;