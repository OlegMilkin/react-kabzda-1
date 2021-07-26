import React from "react";
import classes from "./user.module.css";

const Users = (props) => {
  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
                <img src={u.photoUrl} alt="" width="50"/>
            </div>
            <div>
              {
                u.followed
                  ? <button onClick={ () => { props.follow(u.id) }}>Follow</button>
                  : <button onClick={ () => { props.unfollow(u.id) }}>Unfollow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users;