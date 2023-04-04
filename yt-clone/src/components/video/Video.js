import React from "react";
import { Stack, Box } from "@mui/system";
import { Link } from "react-router-dom";
import VideoCard from "./videoCard/VideoCard";
import ChannelCard from "./channelcard/ChannelCard";
import "./style.css";

const Video = ({ videos }) => {

  if(!videos){
    return null
  }
  // console.log(videos[0]?.id?.videoId)
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-around"}
      alignContent={"start"}
      flexWrap={"wrap"}
      gap={2}
    >
      {videos.map((i, idx) => (
        <div className="wrap">

        <Box key={idx}>
          
            {i.id.videoId && <VideoCard videos={i} />}
          
          {i.id.channelId && <ChannelCard video={i} bg='323232' color='white'  className='channelCard' />}
        </Box>
        </div>
      ))}
    </Stack>
  );
};

export default Video;
