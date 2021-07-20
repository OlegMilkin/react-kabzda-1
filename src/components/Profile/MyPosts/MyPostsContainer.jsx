// import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/lib/connect/connect";

// const MyPostsContainer = (props) => {
//   let  state = props.store.getState();
//
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }
//
//   let updatePostText = (text) => {
//     props.store.dispatch(updateNewPostTextActionCreator(text))
//   }
//
//   return (
//     <MyPosts
//       updatePostText={updatePostText}
//       addPost={addPost}
//       postsData={state.profile.postsData}
//       newPostText={state.profile.newPostText}
//     />
//   )
// }

let mapStateToProps = (state) => {
  return {
    postsData: state.profile.postsData,
    newPostText: state.profile.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updatePostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;