import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElement = props.postsData.map( post => <Post message={post.message} like={post.likes} key={post.id}/> )

  let textArea = React.createRef()

  let addPost = () => {
    props.addPost(textArea.current.value)
    textArea.current.value = '';
  }

  return (
    <div className={classes.myPosts}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea ref={textArea}/>
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