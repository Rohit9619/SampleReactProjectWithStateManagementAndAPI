import { Fragment, useRef, useState, useEffect } from "react";
import "./AuthCard.css";

export default function AuthCard(props) {
  const [Switch, setSwitch] = useState(true);
  const toggleIsLoading = () => {
    props.onFocusHandler();
    setSwitch((current) => !current);
  };
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, [Switch]);

  return (
    <Fragment>
      <div
        className={Switch ? "cont shadow" : "cont s--signup shadow"}
        style={{ borderRadius: "10px" }}
      >
        <div className="form sign-in">
          <h2>Welcome back!</h2>
          <label>
            <span>Email</span>
            <input
              type="email"
              maxLength={50}
              ref={props.LUsername}
              onFocus={props.onFocusHandler}
              autoComplete="off"
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              maxLength={6}
              ref={props.LPassword}
              onFocus={props.onFocusHandler}
              autoComplete="off"
            />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="submit" onClick={props.submitLogin}>
            Sign In
          </button>
          <p></p>
          {props.alertLogin}
          {props.show && (
            <div class="alert alert-danger shadow-sm" role="alert">
              {props.message}
            </div>
          )}
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new products!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn" onClick={toggleIsLoading}>
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Time to go shopping!</h2>
            <label>
              <span>Email</span>
              <input
                type="email"
                maxLength={50}
                ref={props.Username}
                onFocus={props.onFocusHandler}
                autoComplete="off"
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                maxLength={6}
                ref={props.Password}
                onFocus={props.onFocusHandler}
                autoComplete="off"
              />
            </label>
            <p></p>
            <button
              type="button"
              className="submit"
              onClick={props.submitRegister}
            >
              Sign Up
            </button>
            <p></p>
            {props.alertRegister}
            {props.show && (
              <div class="alert alert-danger shadow-sm" role="alert">
                {props.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
