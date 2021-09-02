import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const MyPosts = (props) => {
  const postElement = props.postsData.map( post => <Post message={post.message} like={post.likes} key={post.id}/> )

  let textArea = React.createRef()

  let onAddPost = () => {
    props.addPost();
  }

  let updatePostText = () => {
    props.updatePostText(textArea.current.value)
  }

  return (
    <div className={classes.myPosts}>
      <ProfileStatus/>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea ref={textArea} value={props.newPostText} onChange={updatePostText}/>
        </div>
        <button onClick={ onAddPost }>Add post</button>
      </div>
      <div>
        { postElement }
      </div>
    </div>
  )
}

export default MyPosts;