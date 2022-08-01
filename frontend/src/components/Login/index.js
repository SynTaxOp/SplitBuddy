import React, { useState } from "react";
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import "./styleLogin.css";
const Login = ({ setLoggedin, setUsername, getGroups, setLoader }) => {
  const [username, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [errMsg, setMsg] = useState();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const login = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    fetch("/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status == "201") {
        res.json().then((data) => {
          console.log(data);
          getGroups(username);
          setUsername(username);
          setLoader(true);
          setTimeout(() => {
            setLoader(false);
            setLoggedin(true);
          }, 3000);
        });
      } else {
        res.json().then((data) => {
          console.log(data);
          setMsg(data.message);
          setOpen(true);
        });
      }
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

      <div className="errorDiv">
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={2000}
          className="errorDiv"
          onClose={handleClose}
        >
          <Alert className="errorDiv" severity="error">
            {errMsg}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Login;
