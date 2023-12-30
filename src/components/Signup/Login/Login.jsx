import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import SignUp from "./SignUp";
import axios from "axios";

const Login = ({ setLognIn }) => {
  const [toggle, setToggle] = useState(false);
  const [loginClick, setLoginClick] = useState(false);
  const [errIncorrectEmailOrPass, setErrIncorrectEmailOrPass] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const config = {
    headers: {
      projectID: "7k1ct68pbbmr",
    },
  };
  // console.log(JSON.parse(localStorage.getItem("userDetails")));
  const login_Fetch = async (body) => {
    setErrIncorrectEmailOrPass("");
    try {
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",
        { ...body },
        config
      );
      // console.log(res.data);
      localStorage.setItem("userDetails", [
        JSON.stringify({
          name: res.data.data.name,
          email: res.data.data.email,
          token: res.data.token,
        }),
      ]);
    } catch (err) {
      console.log(err);
      setErrIncorrectEmailOrPass(err.response.data.message);
      setLoginClick(false);
    }
  };
  useEffect(() => {
    if (loginClick) {
      const body = {
        email: email.current.value,
        password: password.current.value,
        appType: "reddit",
      };
      login_Fetch(body);
      setLoginClick(false);
      // console.log("login");
    }
  }, [loginClick]);
  const handleLogindata = (e) => {
    e.preventDefault();
    setLoginClick(true);
  };
  return (
    <div className="Login-page">
      <div className="cross-sign-div">
        <span
          className="cross-sign"
          onClick={() => {
            setLognIn(false);
          }}
        >
          x
        </span>
      </div>
      {!toggle ? (
        <form onSubmit={(e) => handleLogindata(e)}>
          <div className="login-container">
            <h1>Log In</h1>
            <p>
              By continuing, you agree to our <span>User Agreement</span> and
              acknowledge that you understand the <span>privacy Policy.</span>
            </p>
            <div className="continue-google-other">
              <div className="google-login" aria-disabled>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                  alt="google logo"
                  width={20}
                />
                <p>Continue with Google</p>
              </div>
              <div className="google-login" aria-disabled>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-512.png"
                  alt="google logo"
                  width={20}
                />
                <p>Continue with Apple</p>
              </div>
              <div className="or-login-key">
                <p></p>
                <span>OR</span>
                <p></p>
              </div>
              <div className="userName-password">
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" ref={email} />
              </div>
              <div className="userName-password">
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={password}
                  autoComplete="current-password"
                />
              </div>
              <div className="err-massage">
                {errIncorrectEmailOrPass && errIncorrectEmailOrPass}
              </div>
              <div className="forget-pass-signup">
                <span>Forget password?</span>
                <p>
                  New to Reddit?{" "}
                  <span
                    onClick={() => {
                      setToggle(true);
                    }}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="log-in-btn">
            <input type="submit" value="Log In" />
          </div>
        </form>
      ) : (
        <SignUp setToggle={setToggle} />
      )}
    </div>
  );
};

export default Login;
