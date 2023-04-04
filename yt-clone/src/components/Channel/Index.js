import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
import { fetchApi } from "../../utils/fetchDataFromApi";
import ChannelCard from "../video/channelcard/ChannelCard";
import VideoCard from "../video/videoCard/VideoCard";
const Channel = () => {
  const { id } = useParams();

  const [data, setData] = useState("");
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const item = await fetchApi(`channels?part=snippet&id=${id}`);
        // console.log(item)
        setData(item?.items[0]);
        const videoData = await fetchApi(
          `search?channelId=${id}&part=snippet%2cid&order=date`
        );
        setVideo(videoData?.items);
        // console.log(videoData.items);
      } catch (error) {}
    };

    fetchData();
  }, [id]);

  const bg = "#323232";
  const color = "white";
  return (
    <>
      <div className="heroBanner">
        <div className="imgContainer">
          <ChannelCard video={data} bg="transparent" color="black" />
        </div>
      </div>
      <div className="videoFeedContainer">
          <div className="videoGrid">

            {video.map((item) => (
              <Link to={`/videos/${item?.id?.videoId}`} style={{ textDecoration: 'none' }}>

              <VideoCard key={item.id.videoId} videos={item} />
              </Link>
              ))}
          </div>
      </div>
    </>
  );
};

export default Channel;
