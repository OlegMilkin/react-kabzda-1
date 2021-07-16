import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let  state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let updatePostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <MyPosts
      updatePostText={updatePostText}
      addPost={addPost}
      postsData={state.profile.postsData}
      newPostText={state.profile.newPostText}
    />
  )
}

export default MyPostsContainer;