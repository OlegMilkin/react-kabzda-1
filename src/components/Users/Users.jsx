import React from "react";
import classes from './user.module.css';
import {NavLink} from "react-router-dom";
import Pagination from "react-js-pagination";


const Users = (props) => {

  //let pagerItems = Math.ceil(props.totalCount / props.itemsPerPage);

  // let pager = [];
  //
  // for (let i = 1; i <= pagerItems; i++) {
  //   pager.push(i)
  // }

  const handlePageChange = (pageNumber) => {
    props.onPageChanged(pageNumber)
  }

  return (
    <div>

      <div className="pagination-wrapp">
        <Pagination
          activePage={props.activePage}
          itemsCountPerPage={props.itemsPerPage}
          totalItemsCount={props.totalCount}
          pageRangeDisplayed={5}
          onChange={ handlePageChange }
        />
      </div>


      {/*<ul className={classes.pagerList}>*/}
      {/*  {*/}
      {/*    pager.map(page => {*/}
      {/*      return (*/}
      {/*        <li*/}
      {/*          onClick={() => props.onPageChanged(page)}*/}
      {/*          key={page}*/}
      {/*          className={page === props.activePage ? classes.active : ''}*/}
      {/*        >*/}
      {/*          {page}*/}
      {/*        </li>*/}
      {/*      )*/}
      {/*    })*/}
      {/*  }*/}
      {/*</ul>*/}

      {
        props.users.map(u => <div key={u.id}>
            <span>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    src={u.photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_o_UXxC0Hm0Ge1g5RH9GtppPV9fFTB7Jxrg&usqp=CAU'}
                    alt="" width="50"/>
                </NavLink>
              </div>
              <div>
                {
                  u.followed
                    ? <button
                      disabled={props.followingInProgress.some(id => id === u.id)}
                      onClick={() => {
                        props.unfollow(u.id)
                      }
                      }>Unfollow</button>
                    : <button
                      disabled={props.followingInProgress.some(id => id === u.id)}
                      onClick={() => {
                        props.follow(u.id)
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