import React from 'react';
import classes from './FrienItem.module.css';

const FriendItem = (props) => {
  return (
    <a className={classes.friendsItem} href={props.link}>
      {props.name}
    </a>
  )
}

export default FriendItem;
