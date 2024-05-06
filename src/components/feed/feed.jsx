import React from "react";
import "./feed.css"
import Share from "../share/share";
import Post from "../post/post";
import { Posts } from "../../../dummydata.js";
function Feedbar(){
    return(
        <>
 <div className="feed">
        <Share/>
        {Posts.map((post)=>(
        <Post post={post} key={post.id} />))}
        
       
        </div>
        </>
    )
 }
 export default Feedbar;