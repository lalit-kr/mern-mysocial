import './leftbar.css';
import {RssFeed, Bookmarks, School, WorkOutline, Event, Group, PlayCircleFilledOutlined, HelpOutlined} from '@material-ui/icons';
import { Users } from '../../dummyData';
import Friends from '../friends/Friends';

export default function LeftBar() {
  return (
    <div className='leftbar'>
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftListItem">
            <RssFeed className='leftbarIcon'/>
            <span className="leftListItemText">Feed</span>
          </li>
          <li className="leftListItem">
            <PlayCircleFilledOutlined className='leftbarIcon'/>
            <span className="leftListItemText">Videos</span>
          </li>
          <li className="leftListItem">
            <Group className='leftbarIcon'/>
            <span className="leftListItemText">Groups</span>
          </li>
          <li className="leftListItem">
            <Bookmarks className='leftbarIcon'/>
            <span className="leftListItemText">Bookmark</span>
          </li>
          <li className="leftListItem">
            <HelpOutlined className='leftbarIcon'/>
            <span className="leftListItemText">Questions</span>
          </li>
          <li className="leftListItem">
            <WorkOutline className='leftbarIcon'/>
            <span className="leftListItemText">Jobs</span>
          </li>
          <li className="leftListItem">
            <Event className='leftbarIcon'/>
            <span className="leftListItemText">Events</span>
          </li>
          <li className="leftListItem">
            <School className='leftbarIcon'/>
            <span className="leftListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          {Users.map((u)=>(
            <Friends key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
