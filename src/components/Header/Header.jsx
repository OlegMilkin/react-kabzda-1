import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src='https://img1.freepng.ru/20180319/bie/kisspng-chicago-bulls-logo-rebranding-benny-the-bull-clip-bull-logo-5aafd393628c09.0793821915214724034037.jpg'
        alt="img"/>
      {
        props.isLogged
          ? <span className={classes.loggedText}> {props.userName} </span>
          : <NavLink
            to="/login"
            className={classes.loggedText}
          >
            Login
          </NavLink>
      }
    </header>
  )
}

export default Header;