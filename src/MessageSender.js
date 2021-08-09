import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const [input,setInput]=useState('');
    const [imageInput,setImageInput]=useState('');

   const onSubmit=(e)=>{
     e.preventDefault();
     setInput('');
     setImageInput('');
    }
    return (
        <div className="messageSender">
          <div className="messageSender__top">
            <Avatar/>
            <form>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className="messageSender__input" placeholder={'whats on your mind'} />
            <input type="file" value={imageInput} onChange={(e)=>setImageInput(e.target.value)} placeholder="image url(optional)" />
            <button type="submit" onClick={onSubmit}>HandleSubmit</button>
            </form>
            </div>
             <div className="messageSender__botton">
             <div className="messageSender__option">
             <VideocamIcon style={{color:'red'}}/>
             <h3>Live Video</h3>
             </div>

             <div className="messageSender__option">
             <PhotoLibraryIcon style={{color:'green'}}/>
             <h3>photo/video</h3>
             </div>
             
             <div className="messageSender__option">
             <InsertEmoticonIcon style={{color:'orange'}}/>
             <h3>feeling activity</h3>
             </div>
             
             </div>
            </div>
    )
}

export default MessageSender
