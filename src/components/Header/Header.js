import React from "react";
import './Header.css'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faBars} from '@fortawesome/free-solid-svg-icons';

const Header = (props)=> {
    return(
          <div className = "btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                <FontAwesomeIcon icon={faBars}/></button>
                <ul class="dropdown-menu" role = "menu">
                    <li><a href="#">Paris</a></li>
                    <li><a href="#">Sydney</a></li>
                    <li><a href="#">China</a></li>
                </ul>
          </div>
    )
        
};

export default Header;
