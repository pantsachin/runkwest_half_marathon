import "../../styles.css";
import { Link, useParams } from "react-router-dom";
import { useVideoDataContext } from "../../contexts/data-context.js";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function PlaylistVideosPage() {
  const { name } = useParams();
  const { state, dispatch } = useVideoDataContext();

  const [userObjectDisplay, setUserObjectDisplay] = useState(
    state.playlistArray.find((userObject) => userObject.playlistName === name)
  );

  console.log(userObjectDisplay);

  return (
    
  <div className="outer">
  <div className="playlist-layout-box">
      {userObjectDisplay.userPlaylistArray.map((videoData) => (
        <div className="video-card playlist-video-card">
          <div>
            {" "}
            {/* <img className="video-card-thumbnail" src={videoData.avatar} /> */}
           <div className="video-card-thumbnail playlist-thumbnail"> <ReactPlayer controls width="100%" height="100%" url={`https://www.youtube.com/watch?v=${videoData.v_id}`} /></div>
          </div>

          <div className="video-card-details">
            <div className="video-card-title">{videoData.title}</div>
          </div>

          <div className="video-card-name">
            {videoData.channel} - {videoData.postedOn}
          </div>
        </div>
      
      ))}
      </div>
      </div>
    
  );
}
