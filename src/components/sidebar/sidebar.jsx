import React from "react";
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Users} from "../../../dummydata.js";
import CloseFriend from "../closefriend/closefriend.jsx";
function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebaricons">
                    <ul className="list">
                        <li className="icons">
                            <RssFeedIcon />

                            <span className="i">Feed</span>
                        </li>
                      <li  className="icons">  <ChatIcon />
                        <span>Chats</span> </li>
                        <li  className="icons">  <VideocamIcon />
                        <span>Chats</span> </li>
                       <li  className="icons"> <GroupsIcon />
                        <span>Groups</span> </li>
                      <li  className="icons">  <BookmarkIcon />
                        <span>Bookmarks</span> </li>
                      <li  className="icons">  <QuestionMarkIcon />
                        <span>Questions</span> </li>
                       <li  className="icons"> <WorkOutlineIcon />
                        <span>Jobs</span> </li>
                      <li  className="icons">  <CalendarMonthIcon />
                        <span>Events</span> </li>
                        <li  className="icons"><SchoolIcon />
                        <span>Courses</span>
                        </li>
                    </ul>
                    <button className="sidebarbtn">Show more</button>
                </div>
                <hr className="hrline"/>
              {Users.map((user)=>(
                <CloseFriend key={user.id} user={user}/>
              ))}
            </div>
       
        </>
    )
}
export default Sidebar;