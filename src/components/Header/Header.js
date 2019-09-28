import React from "react";
import './Header.css'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faBars} from '@fortawesome/free-solid-svg-icons';

const Header = (props)=> {
    return(
        <header><FontAwesomeIcon icon={faBars}/></header>
  )
};

export default Header;
