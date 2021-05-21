export function createPlaylistClickHandler({
  dispatch,
  newPlaylistName,
  currentVideo
}) {
  // console.log(currentVideo);
  dispatch({
    type: "CREATE_NEW_PLAYLIST",
    payload: currentVideo,
    playlistName: newPlaylistName
  });
}
