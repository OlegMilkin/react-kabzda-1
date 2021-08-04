import React from "react";
import * as axios from 'axios';
import classes from './user.module.css';

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.itemsPerPage}&page=${this.props.currentPage}`)
        .then(response => {
          this.props.setUsers(response.data.items)
          this.props.setTotalCount(response.data.totalCount)
        })
    }
  }

  onPageChanged = (page) => {
    this.props.changeCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.itemsPerPage}&page=${page}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render () {
    let pagerItems = Math.ceil(this.props.totalCount / this.props.itemsPerPage);

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
                  onClick={ () => this.onPageChanged(page) }
                  key={page}
                  className={page === this.props.currentPage ? classes.active : ''}
                >
                  {page}
                </li>
              )
            })
          }
        </ul>

        {
          this.props.users.map(u => <div key={u.id}>
            <span>
              <div>
                  <img src={u.photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_o_UXxC0Hm0Ge1g5RH9GtppPV9fFTB7Jxrg&usqp=CAU'} alt="" width="50"/>
              </div>
              <div>
                {
                  u.followed
                    ? <button onClick={ () => { this.props.unfollow(u.id) }}>Unfollow</button>
                    : <button onClick={ () => { this.props.follow(u.id) }}>Follow</button>
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



}

export default Users;