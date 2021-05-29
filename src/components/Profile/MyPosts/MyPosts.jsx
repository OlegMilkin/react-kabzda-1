import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        New post
      </div>
      <div>
        <Post message='Hi how are you?' like='5'/>
        <Post message='Hello I am post?' like='10'/>
      </div>
    </div>
  )
}

export default MyPosts;