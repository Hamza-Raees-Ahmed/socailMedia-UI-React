import React from "react";
import "./rightbar.css"
import OnlineFriend from "../onlinefriend/onlinefriend";
import { Users} from "../../../dummydata.js";
function Rightbar() {
     return (
          <>
               <div className="rightbar">
                    <div className="rightbarwrapper">
                         <div className="giftcontainer">
                              <div className="giftimgcontent">
                                   <img className="giftimg" src="./src/assets/images/gift.jpg" alt="" />
                                   <span className="gifttxt">  <b>Pola Poster</b> and <b>3 other friends </b> have a today's birthday</span>
                              </div>
                         </div>
                         <div className="adcontainer">
                              <img className="addtimg" src="./src/assets/images/add.jpg" alt="" />
                         </div>
                         <div className="onlinetitle">
                                        online Friends
                                  
                          {Users.map((user)=>(
                              <OnlineFriend  key={user.id} user={user}/>
                          ))}
                           </div>
                    </div>

               </div>
          </>
     )
}
export default Rightbar;