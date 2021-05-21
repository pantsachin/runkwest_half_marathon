import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";


const VideoDataContext = createContext();

function reducerFunction(state, action) {
  switch (action.type) {
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchListArray: state.watchListArray.concat(action.payload)
      };
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchListArray: state.watchListArray.filter(
          (video) => video.v_id !== action.payload.v_id
        )
      };
    case "MODAL_TOGGLE":
      return { ...state, modalOpen: !state.modalOpen };
    case "CREATE_NEW_PLAYLIST":
      return {
        ...state,
        playlistArray: [
          ...state.playlistArray,
          {
            playlistName: action.playlistName,
            userPlaylistArray: [action.payload]
          }
        ]
      };
    case "ADD_TO_EXISTING_PLAYLIST":
      console.log(...state.playlistArray);
      return {
        ...state,
        playlistArray: state.playlistArray.map((ele) => {
          if (ele.playlistName === action.checkPlaylist.playlistName) {
            //this part will be changed to id from name
            return {
              ...ele,
              userPlaylistArray: ele.userPlaylistArray.concat(action.payload)
            };
          } else {
            return ele;
          }
        })
      };
    case "RETURN_SAME_STATE":
      return state
    default:
      return state;
  }
}

export function VideoDataContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, {
    watchListArray: [],
    playlistArray: [],
    modalOpen: false
  });

  console.log("latest state", state);

  return (
    <VideoDataContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoDataContext.Provider>
  );
}

export function useVideoDataContext() {
  return useContext(VideoDataContext);
}
