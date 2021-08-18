import React from "react";
import classes from './user.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {

    let pagerItems = Math.ceil(props.totalCount / props.itemsPerPage);

    let pager = [];

    for(let i = 1; i <= pagerItems; i++) {
      pager.push(i)
    }

    return (
      <div>
        <ul className={classes.pagerList}>
          {
            pager.map(page => {
              return (
                <li
                  onClick={ () => props.onPageChanged(page) }
                  key={page}
                  className={page === props.currentPage ? classes.active : ''}
                >
                  {page}
                </li>
              )
            })
          }
        </ul>

        {
          props.users.map(u => <div key={u.id}>
            <span>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img src={u.photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_o_UXxC0Hm0Ge1g5RH9GtppPV9fFTB7Jxrg&usqp=CAU'} alt="" width="50"/>
                </NavLink>
              </div>
              <div>
                {
                  u.followed
                    ? <button onClick={ () => {
                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                        withCredentials: true,
                        headers: {
                          'API-KEY': 'bfad1697-8f63-40c0-990f-d2c44784401c'
                        }
                      }).then(res => {
                        if (res.data.resultCode === 0) {
                          props.unfollow(u.id)
                        }
                      })

                      }
                    }>Unfollow</button>
                    : <button onClick={ () => {
                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                        withCredentials: true,
                        headers: {
                          'API-KEY': 'bfad1697-8f63-40c0-990f-d2c44784401c'
                        }
                      }).then(res => {
                        if (res.data.resultCode === 0) {
                            props.follow(u.id)
                          }
                        })
                      }
                    }>Follow</button>
                }
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>)
        }
      </div>
    )
}

export default Users;