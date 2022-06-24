import { NavLink } from "react-router-dom";

const NavLinkComponent = () => {

    const activeLink = {
        color : "red",
    }
    return (
        <div style ={{display :'flex', gap : '10px'}}>
            <NavLink to = '/contact' 
            style ={({isActive}) => (isActive ?activeLink : null)}>
                Contact-Us
            </NavLink>

            <NavLink to = '/about' 
            style ={({isActive}) => (isActive ?activeLink : null)}>
                About
            </NavLink>
        </div>
    )
}

export default NavLinkComponent;