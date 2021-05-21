import "../../styles.css";
import { Link, useParams } from "react-router-dom";

export default function PlaylistComponent({playlistObject}) {

  const nameOfPlaylist = playlistObject.playlistName;

  return (
    <>
    
      <div className="playlist-list-box">
     
        <div className="profile-pic-logo">
          <i class="far fa-user-circle"></i>
        </div>

        <div className="playlist-name-number-box">
        <Link className="playlist-name-link" to={`/playlist/${nameOfPlaylist}`}>    <span className="playlist-name">{playlistObject.playlistName}</span> </Link>
         <span className="playlist-number">Number of saved videos - {playlistObject.userPlaylistArray.length} </span>
        </div>
       
      </div>
      
    </>
  );
}
