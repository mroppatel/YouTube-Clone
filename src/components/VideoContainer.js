import React, { useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEO_API } from "../constant/youtube";
import VideoCart from "./VideoCart";
import { API_KEY } from "../constant/youtube";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../Utils/appSlice";

const VideoContainer = () => {

  const {video , category} = useSelector((store) => store.app);
  // jab bhi api call / network call kare to use effect ka use kare
  const dispach = useDispatch();
  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      dispach(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error) ;
    }
  };

  const fetchVideoByCategory = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
      dispach(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(category === 'All'){
      fetchingYoutubeVideo();
    } else {
      fetchVideoByCategory();      
    }
  }, [category]);
  
  return (
    <div className="grid grid-cols-4 gap-3 my-2">
      {
        video.map((item)=>{
          return (
            <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={typeof item.id === 'object' ? item.id.videoId : item.id}>
              <VideoCart item={item}/>  
            </Link>
          )
        })
      }

    </div>
  )
};

export default VideoContainer;
