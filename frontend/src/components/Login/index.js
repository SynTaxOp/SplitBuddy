import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./styleLogin.css";
const Login = ({ setLoggedin, setUsername, groups, setGroups }) => {
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
        setUsername(username);
        setLoggedin(true);
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:8080/groups/displayGroup?username=" + username, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.Groups);
        var grp = data.Groups;
        console.log(grp[0]);
        console.log(typeof grp);
        groups = grp;
        console.log("groups", groups);
        setGroups(groups);
      });
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
