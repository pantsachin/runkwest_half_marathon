import "./styles.css";
import Navigation from "./components/navigation/navigation.js";
import VideoCard from "./components/videoCard/videoCard.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Home from "./components/home/home.js";
import VideoPage from "./components/videoPage/videoPage.js";
import WatchLaterPage from "./components/watchLaterPage/watchLaterPage.js";
import PlaylistPage from "./components/playlist/playlist-page.js";
import PlaylistVideosPage from "./components/playlist/playlist-videos-page.js"
import LoginFalse from "./components/login/login-false.js";
import PrivateRoute from "./components/private-route/private-route.js";
import LoginSignUp from "./components/login/login-sign-up.js";

export default function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videoPage/:videoId" element={<VideoPage />} />
        {/* <Route path="/watchLater" element={<WatchLaterPage />} /> */}
        <PrivateRoute path="/watchLater" element={<WatchLaterPage/>}/> 
        {/* <Route path="/playlist" element={<PlaylistPage />} /> */}
        <Route path="/playlist/:name" element={<PlaylistVideosPage/>} />
        <Route path="/login" element={<LoginFalse/>}/>
        <Route path="/login/signup" element={<LoginSignUp/>}/>
        <PrivateRoute path="/playlist" element={<PlaylistPage/>}/>
      </Routes>
    </div>
  );
} 
