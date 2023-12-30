import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import axios from "axios";
const SignUp = ({ setToggle }) => {
  // const [isSignUpStatus, setIsSignUpStatus] = useState();
  const [signUpClick, setSignUpClick] = useState(false);
  const [allFieldFill, setAllFieldFill] = useState("");
  const [signup, setSignup] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const config = {
    headers: {
      projectID: "7k1ct68pbbmr",
    },
  };

  const signUp_Fetch = async (body) => {
    setSignup(false);
    try {
      setAllFieldFill("");
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        { ...body },
        config
      );
      // console.log(res);
      // setIsSignUpStatus(res.data);
      setSignup(true);
      setTimeout(() => {
        setToggle(false);
      }, 1500);
    } catch (err) {
      console.log(err);
      setAllFieldFill(err.response.data.message);
      setSignUpClick(false);
    }
  };
  useEffect(() => {
    if (signUpClick) {
      const body = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
        appType: "reddit",
      };
      signUp_Fetch(body);
      setSignUpClick(false);
    }
  }, [signUpClick]);
  const handleSignUpdata = (e) => {
    e.preventDefault();
    if (name.current.value && email.current.value && password.current.value) {
      setSignUpClick(true);
    } else {
      setAllFieldFill("Please Fill all required fields");
    }
  };
  return (
    <form onSubmit={(e) => handleSignUpdata(e)}>
      <div>
        <div className="sign-up-container">
          <h1>Sign Up</h1>
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
              <label htmlFor="name">UserName*</label>
              <input type="text" name="name" id="name" ref={name} />
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
              />
            </div>
            <div className="forget-pass-signup">
              <p className="fill-all-field">{allFieldFill && allFieldFill}</p>
              <p className="success-signup">
                {signup && "Successfully SignUp Please Login"}
              </p>
              <p>
                Already a redditor?{" "}
                <span
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  Log in
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="log-in-btn">
          <input type="submit" value="Sign Up" />
        </div>
      </div>
    </form>
  );
};

export default SignUp;
