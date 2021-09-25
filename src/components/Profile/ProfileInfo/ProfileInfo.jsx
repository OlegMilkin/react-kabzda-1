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

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt=""/>
      </div>
      <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
      <div className={classes.profileItem}>
        <div className={classes.profileColumn}>
          <img src={props.profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_o_UXxC0Hm0Ge1g5RH9GtppPV9fFTB7Jxrg&usqp=CAU'} alt=""/>
          { props.isOwner && <input type='file' onChange={ onMainPhotoSelected }/>}
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