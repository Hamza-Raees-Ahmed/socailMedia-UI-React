import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";
import Feedbar from "../../components/feed/feed";
import "./home.css"
function Home(){
    return(
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feedbar/>
    <Rightbar/>
    </div>
    </>
)
 }

 export default Home;