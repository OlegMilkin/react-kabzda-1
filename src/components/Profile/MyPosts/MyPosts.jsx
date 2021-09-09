import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import MyPostReduxForm from "./MyPostForm";

const MyPosts = (props) => {
  const postElement = props.postsData.map( post => <Post message={post.message} like={post.likes} key={post.id}/> )

  const onSubmit = (formData) => {
    props.addPost(formData.newPostText);
  }

  return (
    <div className={classes.myPosts}>
      <h3>
        My posts
      </h3>
      <div>
        <MyPostReduxForm onSubmit={onSubmit}/>
      </div>
      <div>
        { postElement }
      </div>
    </div>
  )
}

export default MyPosts;