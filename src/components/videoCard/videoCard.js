import "../../styles.css";
import { Link } from "react-router-dom";

export default function VideoCard({ videoData }) {
  return (
    <>
      <div className="video-card">
        <Link to={`/videoPage/${videoData.v_id}`}>
          <div>
            {" "}
            <img className="video-card-thumbnail" src={videoData.avatar} />
          </div>
        </Link>

        <div className="video-card-details">
          <div className="video-card-title">{videoData.title}</div>
        </div>

        <div className="video-card-name">
          {videoData.channel} - {videoData.postedOn}
        </div>
      </div>
    </>
  );
}
