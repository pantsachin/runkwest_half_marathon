import "../../styles.css";
import { useAuthContext } from "../../contexts/auth-context.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { fakeAuthApi } from "../fake-backend/fake-backend.js";
// import signInHandler from "../fake-backend/fake-backend.js";
import LoaderModal from "../modals/loader-modal.js";
import { Link } from "react-router-dom";

export default function LoginFalse() {
  const {
    setLogin,
    isLoggedIn,
    password,
    setPassword,
    userName,
    setUserName
  } = useAuthContext();

  const { state } = useLocation();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  async function signInHandler(userName, password) {
    setLoader(true);
    try {
      const response = await fakeAuthApi(userName, password);
      console.log("response", response);
      if (response.status === 200) {
        setLogin((isLoggedIn) => !isLoggedIn);
        console.log("isLoggedIn", isLoggedIn);
        navigate(state ? state.from : "/login");
        setLoader(false);
      }
    } catch (error) {
      console.log("err", error);
      setLoader(false);
    }
  }

  return (
    <>
      <LoaderModal loader={loader}/>
      {" "}
      {isLoggedIn ? (
        <h1>You are now Logged In</h1>
      ) : (
        <div className="login-form-box">
          <div className="sign-in-box"> Sign In</div>

          <div className="username-password-field">
            <input
              className="username-field"
              placeholder="username"
              onChange={() => setUserName(event.target.value)}
            ></input>
            <input
              className="password-field"
              placeholder="password"
              onChange={() => setPassword(event.target.value)}
            ></input>
          </div>

          <div className="forgot-field">
            Forgot <span className="username-span">Username</span> /{" "}
            <span className="password-span">Password?</span>{" "}
          </div>

          <div
            className="sign-in-box-2"
            onClick={() => signInHandler(userName, password)}
          >
            {" "}
            Sign In
          </div>

          <div className="no-account">Don't have an account?</div>
          <Link to="/login/signup">    <div className="sign-up-field">SIGN UP NOW</div></Link>
        </div>
      )}
    </>
  );
}
