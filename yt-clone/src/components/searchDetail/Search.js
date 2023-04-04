import React, { useState, useEffect } from "react";
import "./style.css";

import { useParams } from "react-router-dom";
import Video from "../video/Video";
import { fetchApi } from "../../utils/fetchDataFromApi";
import { Typography } from "@mui/material";
const Index = () => {
  const {searchQuery} = useParams ();
  
  const [videos, setvideos] = useState([]);

 

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchQuery}`).then((data) => {
      setvideos(data.items);
    });
  }, [searchQuery]);

  return (
    <>
      <div className="feedContainer">
        
        <div className="feed">
          <Typography variant="h4">{` ${searchQuery} videos `}</Typography>

          <Video videos={videos} />
        </div>
      </div>
    </>

  
  );
};

export default Index;
