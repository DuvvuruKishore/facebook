import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';


function Post({profilePic,image,name,message}) {
    return (
        <div className="post">
        <div className="post__top">
            <Avatar src={profilePic} className="post__avatar"/>
            <div className="post__topInfo">
            <h3>{name}</h3>
            <p>timestamp...</p>
            </div>
         </div>
         <div className="post__bottom">
         <p>{message}</p>
         </div>
         
         <div className="post__image">
         <img src={image} alt=""/>
         </div>

         <div className="post__options">
         <div className="post_option">
         <ThumbUpIcon/>
         <h4>like</h4>
         </div>
         <div className="post_option">
         <ChatBubbleOutlineIcon/>
         <h4>comment</h4>
         </div>
         
         <div className="post_option">
         <ShareIcon/>
         <h4>share</h4>
         </div>
         
         </div>
        </div>
    )
}

export default Post
