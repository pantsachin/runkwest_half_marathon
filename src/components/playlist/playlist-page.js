import "../../styles.css";
import { useVideoDataContext } from "../../contexts/data-context.js";
import PlaylistComponent from "./playlist-component";

export default function PlaylistPage() {
  const { state, dispatch } = useVideoDataContext();

  return (
    <>
      {state.playlistArray.map((playlistObject) => (
        <PlaylistComponent playlistObject={playlistObject} />
      ))}
    </>
  );
}
