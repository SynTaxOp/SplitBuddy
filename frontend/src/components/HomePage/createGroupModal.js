import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, TextField } from "@mui/material";

const createInput = (arr, setarr, input, setInput, e) => {
  const num = e.target.value;
  arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  setarr(arr);
  setInput(!input);
};
const handleInputChange = async (e, setMemberArray) => {
  const name = await e.target.value;
  setMemberArray((arr) => [...arr, name]);
};
function GroupModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create New Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="textField-divs">
            <TextField
              fullWidth
              type="text"
              error={false}
              required
              id="outlined-required"
              label="Group Name"
              onChange={(e) => props.setGroupName(e.target.value)}
            />
          </div>
          <div className="textField-divs">
            <TextField
              fullWidth
              type="number"
              error={false}
              required
              id="outlined-required"
              label="Number of members"
              onChange={(e) =>
                createInput(
                  props.arr,
                  props.setarr,
                  props.showInput,
                  props.setInput,
                  e
                )
              }
            />
            <p className="max-limit-text">*Maximum limit: 9 members</p>
          </div>
          {props.showInput && (
            <div>
              {props.arr.map((num) => {
                var label = "Member" + num;
                return (
                  <div className="textField-div-mem">
                    <TextField
                      fullWidth
                      type="text"
                      error={false}
                      id="outlined-required"
                      label={label}
                      onChange={(e) =>
                        handleInputChange(e, props.setMemberArray)
                      }
                    />
                  </div>
                );
              })}
            </div>
          )}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} color="error">
          Close
        </Button>
        <Button onClick={() => console.log(props.memberArray)} type="submit">
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const CreateGroupModal = ({ showModal, setShowModal }) => {
  const [memberArray, setMemberArray] = useState([]);
  const [showInput, setInput] = useState(false);
  const [arr, setarr] = useState([]);
  const [groupName, setGroupName] = useState();
  const onClose = (arr) => {
    arr = [];
    setInput(false);
    setShowModal(false);
  };
  return (
    <div>
      <GroupModal
        show={showModal}
        onHide={() => onClose(arr)}
        setGroupName={setGroupName}
        arr={arr}
        setarr={setarr}
        showInput={showInput}
        setInput={setInput}
        setMemberArray={setMemberArray}
        memberArray={memberArray}
      />
    </div>
  );
};

export default CreateGroupModal;
