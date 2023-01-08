import './profile.css';
import TopBar from '../../topbar/TopBar';
import RightBar from '../../component/rightbar/RightBar.jsx';
import LeftBar from '../../component/leftbar/LeftBar.jsx';
import Feed from '../../component/feed/Feed.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile() {

  const [user,setUser]=useState({});
  const username=useParams().username

  useEffect(()=>{
    const fetchUser=async () => {
      const res=await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  },[username]);

  return (
    <div>
      <TopBar/>
      <div className='profile'>
        <LeftBar/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img 
              src={user.coverPicture ? user.coverPicture : "assets/person/nocover.jpg"}
              alt="" className="profileCoverImg" 
              />
              <img src={user.profilePicture ? user.profilePicture : "assets/person/noavtar.png"} 
              alt="" className="profileUserImg" 
              />
              <div className="profileInfo">
                <h4 className='profileInfoName'>{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
          <Feed username={username}/>
          <RightBar user={user}/>

          </div>

        </div>
      </div>
    </div>
  )
}
