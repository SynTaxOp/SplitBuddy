import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./styleLogin.css";
const Login = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <div className="form-div">
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
