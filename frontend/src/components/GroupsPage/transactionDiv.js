import React from "react";
import { Button } from "@mui/material";
import "./styleGroups.css";
const TransactionDiv = ({ setShowModal }) => {
  return (
    <div>
      <div className="trans-header">
        <p className="trans-text">Payments Due</p>
        <Button
          variant="contained"
          className="add-icon"
          onClick={() => setShowModal(true)}
        >
          Add new transaction
        </Button>
      </div>
      <div className="img-div">
        <img
          src={require("../assets/no_transaction.png")}
          className="no-trans-img"
        ></img>
      </div>
    </div>
  );
};

export default TransactionDiv;
