import "../../styles.css";
import { useAuthContext } from "../../contexts/auth-context.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { fakeAuthApi } from "../fake-backend/fake-backend.js";
// import signInHandler from "../fake-backend/fake-backend.js";
import LoaderModal from "../modals/loader-modal.js";

export default function LoginSignUp() {
  const {
    setLogin,
    isLoggedIn,
    password,
    setPassword,
    userName,
    setUserName
  } = useAuthContext();

  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function signUpHandler() {}

  return (
    <>
      {" "}
      {isLoggedIn ? (
        <h1>You are now Logged In</h1>
      ) : (
        <div className="login-form-box">
          <div className="sign-in-box"> Sign Up</div>

          <div className="username-password-field">
            <input
              className="username-field"
              placeholder="username"
              onChange={() => setNewUserName(event.target.value)}
            ></input>
            <input
              className="password-field"
              placeholder="password"
              onChange={() => setNewPassword(event.target.value)}
            ></input>
            <input
              className="password-field"
              placeholder="confirm password"
              onChange={() => setConfirmPassword(event.target.value)}
            ></input>
          </div>

          <div className="forgot-field">
            Forgot <span className="username-span">Username</span> /{" "}
            <span className="password-span">Password?</span>{" "}
          </div>

          <div
            className="sign-in-box-2"
            onClick={() =>
              signUpHandler(newUserName, newPassword, setConfirmPassword)
            }
          >
            {" "}
            Sign In
          </div>

          <div className="no-account">Don't have an account?</div>
          <div className="sign-up-field">SIGN UP NOW</div>
        </div>
      )}
    </>
  );
}
