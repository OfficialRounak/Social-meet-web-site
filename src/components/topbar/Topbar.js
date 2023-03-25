import React from 'react'
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import './Topbar.css'

const Topbar = () => {
    return (
        <div className='topbar-container'>
            <div className="topbar-left">
                <span className='logo'>Social_Meet.</span>
            </div>
            <div className="topbar-center">
                <div className="searchbar">
                    <Search className='search-icon' />
                    <input
                        placeholder='Search Profile, Videos, Photos...'
                        className='search-input'
                    />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className='topbar-link'>Homepage</span>
                    <span className='topbar-link'>Timeline</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icon-item">
                        <Person />
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Notifications />
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Chat />
                        <span className="topbar-icon-badge">1</span>
                    </div>
                </div>
                <img className='topbar-img' src="/assets/person/1.jpeg" alt="acc-image" />
            </div>
        </div>
    )
}

export default Topbar