import "../../styles.css";
import { Link, useParams } from "react-router-dom";
import { videosDataBase } from "../../videosDataBase.js";
import ReactPlayer from "react-player";
import { useVideoDataContext } from "../../contexts/data-context.js";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { watchLaterClickHandler } from "../../utils/functions/watchLaterClickHandler.js";
import AddToPlaylistModal from "../modals/add-to-playlist-modal.js";


// function addToPlaylistClickHandler() {

// }






export default function VideoPage() {
  const { videoId } = useParams();

  const [currentVideo, setCurrentVideo] = useState(
    videosDataBase.find((video) => video.v_id == videoId)
  );

  const videoURL = `https://www.youtube.com/watch?v=${videoId}`;
  // const currentVideo = videosDataBase.find((video) => video.v_id == videoId);

  const { state, dispatch } = useVideoDataContext();

  return (
    <>
      <AddToPlaylistModal currentVideo={currentVideo}/>
      <div className="video-page-box">
        <div className="video-player-box">
          <ReactPlayer controls width="100%" height="100%" url={videoURL} />
        </div>

        <div className="video-page-title">
          <div className="video-card-title title-subscriber-tile">
            <span className="video-title-innerbox">{currentVideo.title}</span>{" "}
            <span className="subscriber-count">{currentVideo.subscriber}</span>
          </div>

          <div className="video-card-name video-page-tile">
            {currentVideo.channel} - {currentVideo.postedOn}
          </div>
          <div className="watch-add-button-container">
            <div
              className={
                state.watchListArray.find((object) => object.v_id == videoId)
                  ? "watch-later-box-active"
                  : "watch-later-box-inactive"
              }
              onClick={() =>
                watchLaterClickHandler({
                  state,
                  dispatch,
                  currentVideo,
                  videoId
                })
              }
            >
              <span className="watch-later-icon">
                <i class="fab fa-font-awesome"></i>
              </span>{" "}
              <span>Watch Later</span>
            </div>

            <div
              className={
                state.watchListArray.find((object) => object.v_id == videoId)
                  ? "add-to-playlist-box-active"
                  : "add-to-playlist-box-inactive"
              }
              onClick={() => dispatch({type: "MODAL_TOGGLE"})}
            >
              <span className="add-to-playlist-icon">
                <i class="fas fa-plus-square"></i>
              </span>{" "}
              <span>Add To Playlist</span>
            </div>
          </div>
        </div>

        <div className="video-page-description">{currentVideo.description}</div>
      </div>
    </>
  );
}
