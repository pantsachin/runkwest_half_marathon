export function watchLaterClickHandler({
  state,
  dispatch,
  currentVideo,
  videoId
}) {
  if (state.watchListArray.find((object) => object.v_id == videoId)) {
    console.log("removed from watch later");
    dispatch({
      type: "REMOVE_FROM_WATCH_LATER",
      payload: currentVideo
    });
  } else {
    console.log("added to watch later");
    dispatch({ type: "ADD_TO_WATCH_LATER", payload: currentVideo });
  }
}
