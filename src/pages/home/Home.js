import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const Home = () => {
    return (
        <>
            <Topbar />
            <div className="home-container">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}

export default Home