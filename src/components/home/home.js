import "../../styles.css";
import VideoCard from "../videoCard/videoCard.js";
import { videosDataBase } from "../../videosDataBase.js";
import { useState } from "react";
import { useSearchContext } from "../../contexts/search-context.js";

export default function Home() {
  const { data } = useSearchContext();

  return (
    <>
      <div className="home-page-content">
        {data.map((video) => (
          <VideoCard videoData={video} />
        ))}
      </div>
    </>
  );
}
