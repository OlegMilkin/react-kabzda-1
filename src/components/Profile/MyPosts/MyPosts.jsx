import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
  const postElement = props.postsData.map( post => <Post message={post.message} like={post.likes} key={post.id}/> )

  let textArea = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let updatePostText = () => {
    props.dispatch(updateNewPostTextActionCreator(textArea.current.value))
  }

  return (
    <div className={classes.myPosts}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea ref={textArea} value={props.newPostText} onChange={updatePostText}/>
        </div>
        <button onClick={ addPost }>Add post</button>
      </div>
      <div>
        { postElement }
      </div>
    </div>
  )
}

export default MyPosts;