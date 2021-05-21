import "../../styles.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth-context.js";
import { useState, useEffect } from "react";
import { useSearchContext } from "../../contexts/search-context.js";
import { videosDataBase } from "../../videosDataBase.js";

export default function Navigation() {
  const { isLoggedIn, setLogin } = useAuthContext();
  const {
    data,
    setData,
    dataDefault,
    setDataDefault,
    searchBar,
    setSearchBar
  } = useSearchContext();

  const getFilteredData = (searchBar) => {
    const filtered = dataDefault.filter((video) => {
      return video.title.toLowerCase().includes(searchBar.toLowerCase());
    });
    setData(filtered);
  };

  return (
    <>
      <nav className="navigation">
        <div className="app-name">
          <span>
            <Link to="/">RunKwest</Link>
          </span>
        </div>

        <ul className="nav-links">
          <li className="nav-search-bar nav-bar-elements">
            <input
              onChange={() => {
                setSearchBar(event.target.value);
                getFilteredData(searchBar);
              }}
              className="search-bar"
              placeholder="search videos"
            ></input>
          </li>

          <li className="nav-playlist nav-bar-elements">
            <span>
              <Link to="/playlist">Playlist</Link>
            </span>
          </li>

          <li className="nav-watch-later nav-bar-elements">
            <span>
              <Link to="/watchLater">Watch Later</Link>
            </span>
          </li>

          <li className="nav-watch-later nav-bar-elements">
            <span>
              <Link to="/login">
                {isLoggedIn ? (
                  <span onClick={() => setLogin((isLoggedIn) => !isLoggedIn)}>
                    Logout
                  </span>
                ) : (
                  <span>Login</span>
                )}
              </Link>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}
