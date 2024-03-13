import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import axios from "axios";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const SignUp = ({ setToggle }) => {
  // const [isSignUpStatus, setIsSignUpStatus] = useState();
  const [signUpClick, setSignUpClick] = useState(false);
  const [allFieldFill, setAllFieldFill] = useState("");
  const [signup, setSignup] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // const name = useRef(null);
  // const email = useRef(null);
  // const password = useRef(null);
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
        name: name,
        email: email,
        password: password,
        appType: "reddit",
      };
      signUp_Fetch(body);
      setSignUpClick(false);
    }
  }, [signUpClick]);
  const handleSignUpdata = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setSignUpClick(true);
    } else {
      setAllFieldFill("Please Fill all required fields");
    }
  };
  return (
    <form onSubmit={(e) => handleSignUpdata(e)} className="sign-container-form">
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
              <p className="continue-GA">Continue with Google</p>
            </div>
            <div className="google-login" aria-disabled>
              <img
                src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-512.png"
                alt="google logo"
                width={20}
              />
              <p className="continue-GA">Continue with Apple</p>
            </div>
            <div className="or-login-key">
              <p></p>
              <span>OR</span>
              <p></p>
            </div>

            <div className="login-user">
              {/* <label htmlFor="name">UserName*</label> */}
              {/* <input type="text" name="name" id="name" ref={name} /> */}
              <TextField
                id="filled-basic"
                label="Name*"
                variant="filled"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="login-user">
              {/* <label htmlFor="email">Email*</label>
              <input type="email" name="email" id="email" ref={email} /> */}
              <TextField
                id="filled-basic"
                label="Email*"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-user">
              {/* <label htmlFor="password">Password*</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={password}
              /> */}
              <FormControl variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password*
                </InputLabel>
                <FilledInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
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
