import { Button } from "@mui/material";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Lottie from "react-lottie";
import animationData from "../assets/confirm.json";
import "./styleGroups.css";
const DisplayTransaction = ({ data, username, title, getSplitwise }) => {
  const [confirm, setConfirm] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const transactionPaid = async (e, data) => {
    e.preventDefault();
    const json = {
      username: username,
      group_name: title,
      payer_name: data[1],
      amount: data[2],
      receiver_name: data[0],
    };
    console.log(json);
    await fetch("http://localhost:8080/transaction/deleteTransaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    }).then((res) => {
      if (res.status == "200") {
        res.json().then((data) => {
          console.log(data);
          onHide();
        });
      } else {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
    await getSplitwise(username, title);
  };
  const onHide = () => {
    setConfirm(false);
  };
  return (
    <div className="split-data">
      <p className="split-text">{data[0]}</p>
      <p className="split-text">{data[1]}</p>
      <p className="split-text">
        <strong>{data[2]}</strong>
      </p>
      <div className="paid-btn-div">
        <Button
          color="success"
          variant="contained"
          className="paid-btn"
          onClick={() => setConfirm(true)}
        >
          Pay
        </Button>
      </div>
      <Modal
        show={confirm}
        onHide={onHide}
        size="md"
        data={data}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirm Payment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="confirm-trans">
            <div className="loader-confirm">
              <Lottie options={defaultOptions} height={150} width={150} />
            </div>
            <div className="confirm-div">
              <p className="headers">To</p>
              <p className="value">{data[1]}</p>
              <p className="headers">From</p>
              <p className="value">{data[0]}</p>
              <p className="headers">Pay</p>
              <p className="value">{data[2]}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} color="error">
            Close
          </Button>
          <Button
            onClick={(e) => transactionPaid(e, data)}
            type="submit"
            color="success"
          >
            <strong>Confirm</strong>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DisplayTransaction;
