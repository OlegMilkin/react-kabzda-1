import React from "react";
import spinner from  "../../common/Loader/spinner.gif";
import classes from "../Profile.module.css";
import ProfileStatusHook from "../ProfileStatus/ProfileStatusHook";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <img
      src={spinner}
      alt="loading"
    />
  }

  return (
    <>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt=""/>
      </div>
      <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
      <div className={classes.profileItem}>
        <div className={classes.profileColumn}>
          <img src={props.profile.photos.large} alt=""/>
        </div>
        <div className={classes.profileColumn}>
          <table>
            <thead>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Full name:</strong>
                </td>
                <td>{props.profile.fullName}</td>
              </tr>
              <tr>
                <td>
                  <strong>About me:</strong>
                </td>
                <td>{props.profile.aboutMe}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo;