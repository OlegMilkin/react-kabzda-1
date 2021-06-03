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
        <Post message={postsData[0].message} like={postsData[0].likes}/>
        <Post message={postsData[1].message} like={postsData[1].likes}/>
      </div>
    </div>
  )
}

export default MyPosts;