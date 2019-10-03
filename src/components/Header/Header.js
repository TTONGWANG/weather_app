import React from "react";
import './Header.css'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faBars} from '@fortawesome/free-solid-svg-icons';
// import {dropdown} from 'react-bootstrap'

const Header = (props)=> {
    return(
        <div className = "dropdown">
            <button class="btn btn-secondly dropdown-toggle btn-sm" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <FontAwesomeIcon icon={faBars}/></button>
            <ul class="dropdown-menu" role = "menu">
                {/* <li><a href="#">Paris</a></li>
                <li><a href="#">Sydney</a></li>
                <li><a href="#">China</a></li> */}
            </ul>
        </div>

        
  )
};

export default Header;
