import React, { useState, useEffect } from "react";
import "./style.css";
import { Stack, Box, typography } from "@mui/system";
import Sidebar from "../sidebar/Sidebar";
import Video from "../video/Video";
import { fetchApi } from "../../utils/fetchDataFromApi";
import { Typography } from "@mui/material";
const Index = () => {
  const [selectedCategory, setCategory] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setvideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <>
      <div className="feedContainer">
        <div className="sidebar">
          <Sidebar
            selectedCategory={selectedCategory}
            setCategory={setCategory}
          />
        </div>
        <div className="feed">
          <Typography variant="h4">{` ${selectedCategory} videos `}</Typography>

          <Video videos={videos} />
        </div>
      </div>
    </>

  
  );
};

export default Index;
