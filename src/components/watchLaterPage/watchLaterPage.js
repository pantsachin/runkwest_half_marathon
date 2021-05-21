import "../../styles.css";
import { useVideoDataContext } from "../../contexts/data-context.js";
import ReactPlayer from "react-player";

export default function WatchLaterPage() {
  const { state, dispatch } = useVideoDataContext();

  return (
    <>
      <div>
        <div className="watch-later-box">
          <div className="watch-later-video-box">
            {state.watchListArray.map((video) => (
              <div>
                {" "}
                <ReactPlayer
                  controls
                  width="100%"
                  height="100%"
                  url={`https://www.youtube.com/watch?v=${video.v_id}`}
                />
                <div className="watch-later-title">
                  <span className="watch-later-title-material">
                    {video.title}
                  </span>{" "}
                  <span
                    className="watch-later-title-remove-icon"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_WATCH_LATER",
                        payload: video
                      })
                    }
                  >
                    <i class="fas fa-times"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
