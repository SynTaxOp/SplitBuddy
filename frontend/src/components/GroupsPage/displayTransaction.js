import { Button } from "@mui/material";
import React from "react";
import "./styleGroups.css";
const DisplayTransaction = ({ data }) => {
  return (
    <div className="split-data">
      <p className="split-text">{data[0]}</p>
      <p className="split-text">{data[1]}</p>
      <p className="split-text">
        <strong>{data[2]}</strong>
      </p>
      <div className="paid-btn-div">
        <Button color="success" variant="contained" className="paid-btn">
          Paid
        </Button>
      </div>
    </div>
  );
};

export default DisplayTransaction;
