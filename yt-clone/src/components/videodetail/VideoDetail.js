import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import VideoCard from "../video/videoCard/VideoCard";
import { fetchApi } from "../../utils/fetchDataFromApi";
import "./style.css";

const VideoDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState("");
  const [videosData, setVideosData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideosData(data);
      setIsLoading(false);
      // console.log(videos);
    });
    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
        setIsLoading(false);
      }
    );
  }, [id]);
  console.log(videos);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!videosData) {
    return <div>No video found.</div>;
  }
  if (!videos) {
    return <div>No video found.</div>;
  }
  // console.log(videos.items[0].snippet.title)

  return (
    <div className="videoStreamContainer">
      <div className="videoDetailContainer">
        <div className="videoContainer">
          <ReactPlayer
            className="videoPlayer"
            url={`https://www.youtube.com/watch?v=${videosData.items[0]?.id}`}
            controls
          />
        </div>
        <div className="detailContainer">
          <div className="titleContainer">
            <p style={{ color: "white" }}>{videosData.items[0].snippet.title}</p>
            <p style={{ color: "white", fontSize: "12px" }}>
              {videosData.items[0].snippet.channelTitle}
            </p>
          </div>
          <div className="likeCounter">
            <p style={{ color: "white" }}>
              <b>
                {parseInt(
                  videosData.items[0].statistics.viewCount
                ).toLocaleString()}{" "}
              </b>
              Views
            </p>
            <p style={{ color: "white" }}>
              <b>
                {parseInt(
                  videosData.items[0].statistics.likeCount
                ).toLocaleString()}{" "}
              </b>
              Likes
            </p>
          </div>
        </div>
      </div>
      <div className="recommendationContainer">
        {videos.map((item) => (
          <Link
            to={`/videos/${item?.id?.videoId}`}
            style={{ textDecoration: "none" }}
          >
            <VideoCard key={item.id.videoId} videos={item}  />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;
