import React from "react";
import { MenuItems } from "./MenuItems";

class NavBar extends Component{
    render(){
        return(
            <nav className="NavBarItems">
                <h1 className="navbar-logo">REACT<i className="fab fa-react"></i></h1>
                <div className="menu-icon">

                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return(
                            <li><a className={items.cName} href={items.url}>
                                {item.title}</a></li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default NavBar;


// https://www.youtube.com/watch?v=fL8cFqhTHwA&ab_channel=BrianDesign