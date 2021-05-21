import "../../styles.css";
import Modal from "react-modal";
import { useVideoDataContext } from "../../contexts/data-context.js";
import { useState } from "react";
import { createPlaylistClickHandler } from "../../utils/functions/createPlaylistClickHandler.js";

function addToExistingPlaylistClickHandler({
  videoObject,
  dispatch,
  currentVideo,
  state
}) {
  const findUser = state.playlistArray.find(
    (users) => users.playlistName === videoObject.playlistName
  );
  console.log(findUser); //Guard to stop repetition
  if (
    findUser.userPlaylistArray.find((video) => video.v_id === currentVideo.v_id)
  ) {
    dispatch({ type: "RETURN_SAME_STATE" });
  } else {
    dispatch({
      type: "ADD_TO_EXISTING_PLAYLIST",
      payload: currentVideo,
      checkPlaylist: videoObject
    });
  }
}

export default function AddToPlaylistModal({ currentVideo }) {
  const { state, dispatch } = useVideoDataContext();
  const [newPlaylistName, setNewPlayListName] = useState("");

  return (
    <>
      <Modal isOpen={state.modalOpen}>
        <div className="inside-modal-container">
          <h1>Create a new Playlist</h1>
          <input
            onChange={(event) => {
              setNewPlayListName(event.target.value);
            }}
            placeholder="new playlist name"
          ></input>
          <button
            onClick={() =>
              createPlaylistClickHandler({
                dispatch,
                newPlaylistName,
                currentVideo
              })
            }
          >
            Create Playlist
          </button>

          <h1 className="previous-playlist">Add To Previous Playlist</h1>

          <ol>
            {state.playlistArray.map((videoObject) => (
              <li
                onClick={() =>
                  addToExistingPlaylistClickHandler({
                    videoObject,
                    dispatch,
                    currentVideo,
                    state
                  })
                }
                className="previous-playlist-list-item"
              >
                {videoObject.playlistName}
              </li>
            ))}
          </ol>

          <div>
            <button onClick={() => dispatch({ type: "MODAL_TOGGLE" })}>
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
