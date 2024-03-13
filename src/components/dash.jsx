import './dash.css';

function Post() {
  return (
    <div className='post'>
      i am a post
    </div>
  );
}

function Dashfeed() {
  return (
    <div className='dash-feed'>
      i am the feed
      <Post />
      <Post />
      <Post />
    </div>
  )
}

function Dashsidebar() {
  return (
    <div className='dash-sidebar'>
      i am the sidebar
    </div>
  );
}

function Dashbar() {
  return (
    <div className='dash-bar'>
      Alyssa's super duper cool blogging platform
    </div>
  )
}

export default function Dash() {
  return (
    <div className='dashboard'>
      <Dashbar />
      <div className='dash-body'>
        <Dashfeed />
        <Dashsidebar />
      </div>
    </div>
  )
}
