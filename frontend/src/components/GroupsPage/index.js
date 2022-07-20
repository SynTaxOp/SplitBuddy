import React, { useState } from "react";
import NavbarSec from "../HomePage/navbar";
import { Avatar, Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router";
import "./styleGroups.css";
import TransactionDiv from "./transactionDiv";
import TransactionModal from "./transactionModal";
const GroupsPage = ({ members, setLoggedin, username }) => {
  const { title } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [member_name, setmemberName] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [splitData, setSplitData] = useState([]);

  const getSplitwise = async (username, title) => {
    fetch(
      "http://localhost:8080/transaction/generateSplitwise?username=" +
        username +
        "&title=" +
        title,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSplitData(data);
      });
  };
  const addMember = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      group_name: title,
      member_name: member_name,
    };
    fetch("http://localhost:8080/groups/addMember", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status == "200") {
        res.json().then((data) => {
          console.log(data);
          setShowInput(false);
        });
      } else {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };
  return (
    <div>
      <NavbarSec setLoggedin={setLoggedin} />
      <div className="main-group-div">
        <div className="group-content">
          <p className="groupname-text">👭 {title} 👬</p>
          <TransactionDiv setShowModal={setShowModal} splitData={splitData} />
        </div>
        <div className="members-div">
          <p className="member-text"> Members </p>
          {members.map((ele) => {
            return (
              <div key={ele.key} className="member-list">
                <div>
                  <Avatar
                    className="avatar"
                    src={require("../assets/avatar.png")}
                  />
                </div>
                <div className="member-name">
                  <p className="memberName-text">{ele}</p>
                </div>
              </div>
            );
          })}
          <div className="add-mem-div">
            {showInput ? (
              <div className="add-div">
                <div className="close-icon-div">
                  <CloseIcon
                    onClick={() => setShowInput(false)}
                    className="close-icon"
                  />
                </div>
                <div className="textfield-div">
                  <TextField
                    fullWidth
                    required
                    id="standard-required"
                    label="Member Name"
                    variant="standard"
                    value={member_name}
                    className="textfield"
                    onChange={(e) => setmemberName(e.target.value)}
                  />
                </div>
                <Button
                  variant="contained"
                  className="add-btn"
                  onClick={addMember}
                >
                  Confirm{" "}
                </Button>
              </div>
            ) : (
              <Button
                variant="contained"
                onClick={() => setShowInput(true)}
                className="add-mem-btn"
              >
                Add a Member
              </Button>
            )}
          </div>
        </div>
      </div>
      <TransactionModal
        setShowModal={setShowModal}
        showModal={showModal}
        members={members}
        title={title}
        username={username}
        getSplitwise={getSplitwise}
      />
    </div>
  );
};

export default GroupsPage;
