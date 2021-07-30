import React from "react";
//import classes from "./user.module.css";

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
        followed: false,
        fullName: 'Dmitry K.',
        status: 'I am a boss',
        location: {
          city: 'Minsk',
          country: 'Belarus'
        }
      },
      {
        id: 2,
        photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
        followed: true,
        fullName: 'Sasha',
        status: 'Vacationing',
        location: {
          city: 'Moscow',
          country: 'Russia'
        }
      },
      {
        id: 3,
        photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
        followed: false,
        fullName: 'Oleg',
        status: 'meeting',
        location: {
          city: 'Kiev',
          country: 'Ukraine'
        }
      }
    ])
  }

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
                  ? <button onClick={ () => { props.unfollow(u.id) }}>Unfollow</button>
                  : <button onClick={ () => { props.follow(u.id) }}>Follow</button>
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