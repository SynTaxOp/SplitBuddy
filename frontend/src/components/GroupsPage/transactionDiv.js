import React from "react";
import { Button } from "@mui/material";
import "./styleGroups.css";
import DisplayTransaction from "./displayTransaction";
const TransactionDiv = ({
  setShowModal,
  splitData,
  username,
  title,
  getSplitwise,
}) => {
  return (
    <div className="trans-div">
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
      {!(splitData.length > 0) ? (
        <div className="img-div">
          <img
            src={require("../assets/no_transaction.png")}
            className="no-trans-img"
          ></img>
        </div>
      ) : (
        <>
          <div className="heading-div">
            <p className="split-text">Paid by</p>
            <p className="split-text">Paid to</p>
            <p className="split-text">Amount</p>
            <p>{""}</p>
          </div>
          {splitData.map((ele) => {
            return (
              <div>
                <DisplayTransaction
                  data={ele}
                  username={username}
                  title={title}
                  getSplitwise={getSplitwise}
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default TransactionDiv;
