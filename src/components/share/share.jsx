import React from "react";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import "./share.css"
  function Share(){
    return(
    <div className="shareparent">
    <div className="share">
       <div className="shareWapper">
        <div className="sharetopbar">
            <img className="shareProfileimg" src="./src/assets/images/1.jpg" alt="" />
            <input type="text" placeholder="What's in your mind..?"  className="shareinput" />
        </div>
        <hr className="sharehr"/>
        <div className="sharebuttombar"></div>
        <div className="shareicons">
            <div className="shareicon">
               <PhotoLibraryIcon htmlColor="tomato"/>
                <span className="shareicontxt">Post or Video</span>
            </div>
            <div className="shareicon">
               <LabelIcon htmlColor="blue"/>
                <span className="shareicontxt">Tags</span>
            </div>
            <div className="shareicon">
               <AddLocationIcon htmlColor="green"/>
                <span className="shareicontxt">Location</span>
            </div>
            <div className="shareicon">
               <EmojiEmotionsIcon htmlColor="goldenrod"/>
                <span className="shareicontxt">Feelings</span>
            </div>
            <button className="sharebtn">Share</button>
        </div>
       </div>
    </div>
    </div>
)
  }
  export default Share;