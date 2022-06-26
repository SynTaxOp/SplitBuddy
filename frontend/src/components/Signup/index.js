import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const Signup = () => {
  const [email, setMail] = useState("");
  const [fullname, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
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
              label="textField"
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
              onChange={(e) => setUsername(e.target.value)}
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
