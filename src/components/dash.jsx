import './dash.css';

export default function Dash() {
  return (
    <div className='dashboard'>
      <div className='dash-bar'>
        i am the dashbar
      </div>
      <div className='dash-body'>
        i am the dashbody
        <div className='dash-feed'>
          i am the feed
        </div>
        <div className='dash-sidebar'>
          i am the sidebar
        </div>
      </div>
    </div>
  )
}
