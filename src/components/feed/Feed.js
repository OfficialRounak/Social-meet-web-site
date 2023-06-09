import { } from '@material-ui/icons';
import './Feed.css'
import Share from '../share/Share';
import Post from '../posts/Post';
import {Posts} from '../../dummyData'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Share/>
        {Posts.map((p)=>(
        <Post key={p.id} post={p}/> 
        ))}
      </div>   
    </div>
  )
}

export default Feed