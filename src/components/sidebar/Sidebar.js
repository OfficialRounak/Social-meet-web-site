import React from 'react'
import './Sidebar.css'
import { RssFeed, Chat , Videocam , Group , Bookmark , HelpOutline , Work, MoveToInbox } from '@material-ui/icons';
import { Users } from '../../dummyData';
import Friends from '../Friends/Friends';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <ul className='sidebar-list'>
          <li className='list-items'>
            <RssFeed className='list-item-icon' />
            <span className='list-item-text'>Feeds</span>
          </li>
          <li className='list-items'>
            <Chat className='list-item-icon' />
            <span className='list-item-text'>Chats</span>
          </li>
          <li className='list-items'>
            <Videocam className='list-item-icon' />
            <span className='list-item-text'>Videos</span>
          </li>
          <li className='list-items'>
            <Group className='list-item-icon' />
            <span className='list-item-text'>Groups</span>
          </li>
          <li className='list-items'>
            <Bookmark className='list-item-icon' />
            <span className='list-item-text'>Bookmarks</span>
          </li>
          <li className='list-items'>
            <HelpOutline className='list-item-icon' />
            <span className='list-item-text'>Questions</span>
          </li>
          <li className='list-items'>
            <Work className='list-item-icon' />
            <span className='list-item-text'>Jobs</span>
          </li>
          <li className='list-items'>
            <MoveToInbox className='list-item-icon' />
            <span className='list-item-text'>Courses</span>
          </li>
        </ul>
        <button className='btn'>Show More</button>
        <hr  className='btn-hr'/>
        <ul className='friend-list'>
          {Users.map((u)=>(
            <Friends key={u.id} friends={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar