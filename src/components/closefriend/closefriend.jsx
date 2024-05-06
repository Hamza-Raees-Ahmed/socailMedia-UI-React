import React from "react";
import "./closefriend.css"


  function CloseFriend({user}){
    return(
    <>
      <ul className="friend">
                    <li className="friendlist">
                        <img  className="frendimg" src={user.profilePicture} alt="" />
                        <span>{user.username}</span>
                    </li>
                </ul>
    </>
)
  };
   export default CloseFriend;
