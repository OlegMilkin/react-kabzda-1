import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import classes from './Friends.module.css';

const Friends = (props) => {

  const friendsList = props.state.map((friend) => {
    return <FriendItem key={friend.id} name={friend.name} link={friend.link}/>
  })

  return (
    <>
      <h3>Friends</h3>
      <div className={classes.friends}>
        {friendsList}
      </div>
    </>
  )
}

export default Friends;