import React from 'react' 
import './Rightbar.css'
import { Users } from '../../dummyData'
import OnlineUser from '../OnlineUsers/OnlineUser'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img className='birthday-img' src="/assets/gift.png" alt="" />
          <span className='birthday-text'>
            <b>Rounak Roy</b> and <b>3 others friends </b>have birthday today
          </span>
        </div>
        <img className='ad-img' src="assets/ad.png" alt="ad-img" />
        <h4 className='rightbar-title'>Online Friends</h4>
        <hr  className='line-break'/>
        <ul className='rightbar-friendlist'>
            {Users.map((u)=>(
              <OnlineUser key={u.id} user={u}/>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar