import React from 'react'
import './Share.css';
import { PermMedia , Label , Room , EmojiEmotions} from '@material-ui/icons'

const Share = () => {
    return (
        <div className='share'>
            <div className="share-wrapper">
                <div className="share-top">
                    <img src="/assets/person/1.jpeg" className='dp-img' alt="dp" />
                    <input
                        placeholder="What's on your mind?" 
                        className='share-text'
                    />
                </div>
                <hr className='share-hr' />
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PermMedia htmlColor='tomato' className='share-icon' />
                            <span className='share-icon-text'>Photos or Videos</span>
                        </div>
                        <div className="share-option">
                            <Label htmlColor='blue' className='share-icon' />
                            <span className='share-icon-text'>Tag</span>
                        </div>
                        <div className="share-option">
                            <Room htmlColor='green' className='share-icon' />
                            <span className='share-icon-text'>Location</span>
                        </div>
                        <div className="share-option">
                            <EmojiEmotions htmlColor='goldenrod' className='share-icon' />
                            <span className='share-icon-text'>Feelings</span>
                        </div>
                    </div>
                    <button className='share-btn'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share