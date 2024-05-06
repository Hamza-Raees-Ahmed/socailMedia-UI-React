import React from "react";
import "./onlinefriend.css"

 function OnlineFriend({user}){
    return(
        <>
         <ul className="onlinefrindlist">
                        
                              <li className="onlinefrind">
                              <div className="userimg">
                                        <img className="usertimg" src={user.profilePicture} alt="" />
                                        <span className="greendot"> </span>
                                        <span className="username"> {user.username}</span>
                                   </div>
                              </li>
                    
                              
                              
                         </ul></>
    )
 }
  export default OnlineFriend;