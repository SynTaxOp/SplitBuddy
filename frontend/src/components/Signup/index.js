import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const Signup = ({setUsername, setLoggedin}) => {
  const [email, setMail] = useState("");
  const [fullname, setName] = useState("");
  const [username, setUsername2] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    const data = {
      name: fullname,
      email: email,
      username: username,
      password: password,
    };
    fetch("http://localhost:8080/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsername(username)
        setLoggedin(true)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={register}>
        <div className="form-div">
          <div className="textField-div">
            <TextField
              fullWidth
              type="text"
              error={false}
              required
              id="outlined-required"
              label="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="textField-div">
            <TextField
              fullWidth
              type="email"
              error={false}
              required
              id="outlined-required"
              label="Email"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="textField-div">
            <TextField
              fullWidth
              type="text"
              error={false}
              required
              id="outlined-required"
              label="Username"
              onChange={(e) => setUsername2(e.target.value)}
            />
          </div>
          <div className="textField-div">
            <TextField
              fullWidth
              className="textField"
              required
              id="outlined-required"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="textField-div">
            <TextField
              fullWidth
              className="textField"
              required
              id="outlined-required"
              label="Confirm Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-div">
            <Button
              fullWidth
              variant="contained"
              type="submit"
              className="submit-btn"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
