

import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const videoCard = ({ videos }) => {
//  if(!videos){
//   return null
//  }

 

  return (
    <div className="cardContainers">
      <Link
        to={`/videos/${videos?.id?.videoId}`}
        style={{ textDecoration: "none" }}
      >
        <div className="cardContainer">
          <div className="videosCardImgContainer">
            <img
              className="videoCardImg"
              src={videos?.snippet?.thumbnails?.high?.url}
            />
          </div>
          <div className="videCardDetailsContainer">
            <div className="videoTitle">
              <p style={{ fontWeight: "bolder" }}>
                {" "}
                {videos?.snippet.title.slice(0, 50)}...{" "}
              </p>
            </div>
            <Link
              style={{
                textDecoration: "none",
                zIndex: 1,
                pointerEvents: "all",
              }}
              className="channelTitleContainer"
              to={`/channel/${videos?.snippet.channelId}`}
            >
              <div className="channelTitle">
                <p className="channelTitleMain">
                  {" "}
                  {videos?.snippet.channelTitle.slice(0, 50)}{" "}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default videoCard;
