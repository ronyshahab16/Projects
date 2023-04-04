import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Index"
import Feed from "./components/Feed/Index"
import VideoDetail from "./components/videodetail/VideoDetail"
import  Channel  from "./components/Channel/Index";
import Search from "./components/searchDetail/Search";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/videos/:id" element={<VideoDetail/>} />
          <Route path="/channel/:id" element={<Channel/>} />
          <Route path="/search/:searchQuery" element={<Search/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
