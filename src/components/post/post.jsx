import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./post.css"
import { Users} from "../../../dummydata.js";

function Post({post}) {
  //  console.log(Users,"Users agai")
  const [like ,setLike] = useState(post.like)
  const [islike,setIsLike] = useState(false)
  const likehandler = ()=>{
    setLike(islike ? like -1 : like + 1)
   setIsLike(!islike)
    // setLike(like + 1)
  }
  return (
    <>
      <div className="post">
        <div className="postwrapper">
          <div className="posttop">
            <img src={Users.filter((u)=> u.id === post.userId)[0]?.profilePicture} alt="" className="postprofileimg" />
           
            <span className="postusername">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
            <span className="posttime"> {post.date}</span>
          <div className="posticon"></div>
            <MoreVertIcon className="postoptionicon"/>
          </div>
          <div className="postmiddle">
            <h4 className="posttxt">{post?.desc}</h4>
            <img src={post?.photo} alt="" className="postimg" />
          </div>
          <div className="postbuttom">
            <img src="./src/assets/images/like.png"  onClick={likehandler} alt="" className="likeimg" />
            <img src="./src/assets/images/heart.png" onClick={likehandler}  alt="" className="heartimg" />
            <div className="postlikencomt">
            <span className="postlike">{like} </span>
            <span className="posttxt">like it</span>
            <span className="postcomt">{post.comment} comments</span>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}
export default Post;