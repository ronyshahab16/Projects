import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
const channelCard = ({video, bg, color}) => {
  // console.log(video)

  if (!video){
    return null
  }
 
  
  return (
    <Link to={`/channel/${video?.snippet?.channelId}`}>
    <div className='cardContainer' style={{backgroundColor:bg, color:color}}>
      <div className='channelImgContainer' >
        <img src={video?.snippet?.thumbnails?.default?.url} className='channelImg' />
      </div>
      <div className='detailsContainer'>
        <div className='channelName'>
          <p style={{fontSize:'16px', textDecoration:'none'}} >{video?.snippet.channelTitle|| video?.brandingSettings?.channel?.title }</p>
        </div>
        <div className='subscriberCounter'>
        <p style={{fontSize:'12px'}} > {video?.statistics?.subscriberCount } Subscribers </p>
        </div>
      </div>

    </div>
     </Link>
  )
}

export default channelCard