import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
 import "./Topbar.css"
function Topbar(){
     return(
        <>
        <div className="topbarcontainer">
        <div className="topbarleft">
            <h1> Socail Media</h1>
          </div>
          <div className="topbarcenter">
            <div className="topbarsearch">
            <SearchIcon/>
          
         <input type="text" className="input" placeholder="Search for Friend, Post or Video" />
            </div>
            </div>
          <div className="topbarright">
            <div className="topbarheading">
                <h3>Homepage</h3>
                <h3>Timeline</h3>
                <div className="topbaricons">
                  <div className="icons">
                  <PersonIcon/>
                  <p className="notification">1</p>
                  </div>
                  <div className="icons">
                  <MessageIcon/>
                  <p className="notification">1</p>
                  </div>
                  <div className="icons">
                  <NotificationsIcon/>
                  <p className="notification">0</p>
                  </div>
                  <div className="topbarimgitem">
                    <img src="./src/assets/images/1.jpg"  className="topbarimg" />
                  </div>
                </div>
            </div>
          </div>
          </div>
        </>
     )
  }

  export default Topbar;