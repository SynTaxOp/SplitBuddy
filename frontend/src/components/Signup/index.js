import React, { useState } from "react";
import { TextField, Button, Snackbar, Alert } from "@mui/material";

const Signup = ({ setUsername, setLoggedin, getGroups, setLoader }) => {
  const [email, setMail] = useState("");
  const [fullname, setName] = useState("");
  const [username, setUsername2] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [open, setOpen] = useState(false);
  const [errMsg, setMsg] = useState();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const register = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setMsg("Passwords do not match");
      setOpen(true);
    } else {
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
        .then((res) => {
          if (res.status == 200) {
            res.json().then((data) => {
              console.log(data);
              setUsername(username);
              getGroups(username);
              setLoader(true);
              setTimeout(() => {
                setLoader(false);
                setLoggedin(true);
              }, 3000);
            });
          } else {
            res.json().then((data) => {
              console.log(data);
              setMsg(data.msg);
              setOpen(true);
            });
          }
        })
        .catch((err) => console.log(err));
    }
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
              onChange={(e) => setPassword2(e.target.value)}
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

export default Signup;
