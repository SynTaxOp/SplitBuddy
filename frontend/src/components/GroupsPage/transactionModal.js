import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Chip,
  Box,
  OutlinedInput,
} from "@mui/material";

const TransactionModal = ({
  showModal,
  setShowModal,
  members,
  title,
  username,
  getSplitwise,
}) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 350,
      },
    },
  };

  const [payees, setpayees] = useState([]);
  const [payer, setPayer] = useState("");
  const [amount, setAmount] = useState();
  const handleChange = async (e) => {
    const {
      target: { value },
    } = e;
    setpayees(typeof value === "string" ? value.split(",") : value);
  };

  const onHide = () => {
    setShowModal(false);
  };

  const addTransaction = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      group_name: title,
      payer_name: payer,
      amount: amount,
      payees: payees,
    };
    setpayees([]);
    if (data.payer_name != "" && data.payees.length > 0) {
      await fetch("/transaction/addTransaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          onHide();
        })
        .catch((err) => console.log(err));
    }
    await getSplitwise(username, title);
  };
  return (
    <div>
      <Modal
        show={showModal}
        onHide={onHide}
        members={members}
        payees={payees}
        setpayees={setpayees}
        handleChange={handleChange}
        payer={payer}
        setPayer={setPayer}
        setAmount={setAmount}
        addTransaction={addTransaction}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Transaction
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="name-amount-div">
              <div>
                <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Payer Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Payer"
                    value={payer}
                    onChange={(e) => setPayer(e.target.value)}
                  >
                    {members.map((ele) => {
                      return (
                        <MenuItem key={ele} value={ele}>
                          {ele}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <TextField
                fullWidth
                type="number"
                error={false}
                required
                id="outlined-required"
                label="Amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel id="demo-multiple-chip-label">Payee</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={payees}
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {members.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} color="error">
            Close
          </Button>
          <Button onClick={addTransaction} type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TransactionModal;
