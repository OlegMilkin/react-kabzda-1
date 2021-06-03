import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    {
      id: '1',
      message: 'Hi how are you?',
      likes: '5'
    },
    {
      id: '2',
      message: 'Hello I am post?',
      likes: '10'
    },
  ]

  const postElement = postsData.map( post => <Post message={post.message} like={post.likes}/> )

  return (
    <div className={classes.myPosts}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div>
        { postElement }
      </div>
    </div>
  )
}

export default MyPosts;