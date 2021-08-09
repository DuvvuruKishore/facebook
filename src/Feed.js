import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
           {/*stories */} 
           <StoryReel/>
           {/*messagesender*/}
           <MessageSender/>
           <Post profilePic='https://icon2.cleanpng.com/20180201/feq/kisspng-virat-kohli-icc-world-twenty20-india-national-cric-virat-kohli-5a72b2d5cef8d4.5690779715174663258478.jpg' 
           name='king' message="ruling the world cricket" 
           image='https://icon2.cleanpng.com/20180201/feq/kisspng-virat-kohli-icc-world-twenty20-india-national-cric-virat-kohli-5a72b2d5cef8d4.5690779715174663258478.jpg'/>
           
        </div>
    )
}

export default Feed
