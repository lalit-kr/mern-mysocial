import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from "@material-ui/core";

export default function RightBar({user}) {

  // const [friends,setFriends]=useState([]);

  // useEffect(()=>{
  //   const getFriends=async()=>{
  //     try{
  //       const friendList= await axios.get("/users/friends/"+user._id);
  //       setFriends(friendList.data);
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }
  //   getFriends();
  // },[user._id]);

  const HomeRightBar=()=>{
    return (
      <>
      <div className="birthdayContainer">
            <img src="/assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Alice Wade</b> and <b>3 other friends</b> have their birthday today
            </span>
      </div>
          <img src="assets/ad.jpg" alt="" className="adImage" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u)=>(
              <Online key={u.id} user={u}/>
            ))}        
          </ul>
    </>
    )
  }

  const ProfileRightBar=()=>{
    return (
      <div>
        <h3 className='rightbarTitle'><b>User Information</b></h3>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">
              {user.relationship===1 
              ? "Single" 
              :user.relationship===2 
              ? "Married" 
              : "-"}
            </span>
          </div>
        </div>
        <h3 className='rightbarTitle'><b>User Friends</b></h3>
        <div className="rightbarFollowings">
         {/* {friends.map((friend)=>{ */}
           {/* <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}> */}
           {/* <div className="rightbarFollowing"> */}
            {/* <img src={friend.profilePicture ? friend.profilePicture : "assets/person/noavtar.png"} alt="" className="rightbarFollowingImg" /> */}
            {/* <span className="rightbarFollowingName">{friend.username}</span> */}
          {/* </div> */}
           {/* </Link> */}
          {/* })}           */}
        </div>
      </div>
    )
  }
  return (
    <div className='rightbar'>
        <div className="righbarWrapper">
          {user ? <ProfileRightBar/> : <HomeRightBar/>}  
        </div>
    </div>
  )
}
