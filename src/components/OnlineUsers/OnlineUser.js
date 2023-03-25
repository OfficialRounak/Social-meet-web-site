import './OnlineUser.css'


const OnlineUser = ({user}) => {
  return (
    <li className='rightbar-friend'>
    <div className='rightbar-img-container'> 
      <img  className="online-friend-img" src={user.profilePicture} alt="online friends img" />
      <span className='rightbar-online'></span>
    </div>
    <span className='online-profile-name'>{user.username}</span>
  </li>
  )
}

export default OnlineUser