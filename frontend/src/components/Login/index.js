import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./styleLogin.css";
const Login = () => {
  const [username, setMail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={login}>
        <div className="form-div">
          <div className="textField-div">
            <TextField
              fullWidth
              type="text"
              error={false}
              required
              id="outlined-required"
              label="Username"
              onChange={(e) => setMail(e.target.value)}
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
          <div className="button-div">
            <Button
              fullWidth
              variant="contained"
              type="submit"
              className="submit-btn"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
