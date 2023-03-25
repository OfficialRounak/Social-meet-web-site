import React, { useState } from 'react'
import './Post.css';
import { FormatListBulleted } from '@material-ui/icons';
import { Users } from '../../dummyData';

const Post = ({post}) => {
    const[like,setLike]=useState(post.like)
    const[isLiked,setIsLiked]=useState(false);

    const handleClick=()=>{
        setLike(isLiked? like+1 : like-1);
        setIsLiked(!isLiked);
    }


    return (
        <div className='posts'>
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className='post-dp' src={Users.filter((u)=>u.id===post.id)[0].profilePicture} alt="dp" />
                        <span className='post-username'>{Users.filter((u)=>u.id===post.id)[0].username}</span>
                        <span className='post-timestamp'>{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <FormatListBulleted />
                    </div>
                </div>
                <div className="post-center">
                    <span className='post-center-text'>{post?.desc}</span>
                    <img  className='post-pic' src={post.photo} alt="post-snap" />
                </div>
                <div className="post-bottom">
                    <div className="reaction-icons">
                        <img className='emoji-icon' src="/assets/like.png"   onClick={handleClick}   alt="like-reaction" />
                        <img className='emoji-icon' src="/assets/heart.png"   onClick={handleClick}   alt="love-reaction" />
                        <span className='liked-no'>{like} people liked it</span>
                    </div>
                    <div className="comments-icon">{post.comment} comments</div>
                </div>
            </div>
        </div>
    )
}

export default Post