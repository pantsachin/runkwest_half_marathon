import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { VideoDataContextProvider } from "./contexts/data-context.js";
import { AuthContextProvider } from "./contexts/auth-context.js";
import { SearchContextProvider } from "./contexts/search-context.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthContextProvider>
        <SearchContextProvider>
          <VideoDataContextProvider>
            <App />
          </VideoDataContextProvider>
        </SearchContextProvider>
      </AuthContextProvider>
    </Router>
  </StrictMode>,
  rootElement
);
