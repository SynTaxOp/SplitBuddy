import React, { useState } from "react";
import NavbarSec from "../HomePage/navbar";
import { Avatar } from "@mui/material";
import { useParams } from "react-router";
import "./styleGroups.css";
import TransactionDiv from "./transactionDiv";
import TransactionModal from "./transactionModal";
const GroupsPage = ({ members, setLoggedin, username }) => {
  const { title } = useParams();
  const [showModal, setShowModal] = useState(false);
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
      });
  };
  return (
    <div>
      <NavbarSec setLoggedin={setLoggedin} />
      <div className="main-group-div">
        <div className="group-content">
          <p className="groupname-text">👭 {title} 👬</p>
          <TransactionDiv setShowModal={setShowModal} />
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
