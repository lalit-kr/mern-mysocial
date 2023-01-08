import './home.css';
import TopBar from '../../topbar/TopBar';
import RightBar from '../../component/rightbar/RightBar.jsx';
import LeftBar from '../../component/leftbar/LeftBar.jsx';
import Feed from '../../component/feed/Feed.jsx';

export default function Home() {
  return (
    <>
      <TopBar/>
      <div className='homeContainer'>
        <LeftBar/>
        <Feed/>
        <RightBar/>
      </div>
    </>
  )
}
