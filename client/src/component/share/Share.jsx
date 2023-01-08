import './share.css';
import {PermMedia, Label, Room, EmojiEmotions, Cancel} from '@material-ui/icons';
import { useContext, useRef, useState } from 'react';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';

export default function Share() {

    const {user}=useContext(AuthContext);
    const desc=useRef();
    const [file,setFile]=useState(null);

    const submitHandler= async (e)=>{
        e.preventdefault();
        const newPost={
            userId:user._id,
            desc:desc.current.value
        }
        if(file){
            const data=new FormData();
            const fileName=Date.now()+file.name;
            data.append("name",fileName);
            data.append("file",file);
            newPost.img=fileName;
            try{
                await axios.post("/upload",data);
            }catch(err){
                console.log(err);
            }
        }
        try{
            await axios.post("/posts",newPost);
            window.location.reload();
        } catch(err){}
    }

  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img 
                src={user.profilePicture 
                ? user.profilePicture 
                : "/assets/person/noavtar.png"} 
                alt="" className="shareProfileImg" 
                />
                <input placeholder={`What's in your mind ${user.username.charAt(0).toUpperCase()+user.username.slice(1)} ?`} 
                className="shareInput" 
                ref={desc}
                />
            </div>
            <hr className="shareHr" />
            {file &&(
                <div className="shareImgContainer">
                    <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                    <Cancel className='shareCancelImg' onClick={()=>setFile(null)} />
                </div>
            )}
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionText">Photo or Video</span>
                        <input style={{display:"none"}} 
                        type="file" id="file" 
                        accept='.jpg,.jpeg,.png,.webp' 
                        onChange={(e)=>setFile(e.target.files[0])}
                        />
                    </label>
                    <div className="shareOption">
                        <Label htmlColor='green' className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='blue' className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='gold'  className='shareIcon'/>
                        <span className="shareOptionText">Mood</span>
                    </div>
                </div>
                <button className="shareButton" type="submit">Share</button>
            </form>

        </div>
    </div>
  )
}
