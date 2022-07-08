import React from "react";
import NavbarSec from "../HomePage/navbar";
import { Avatar } from "@mui/material";
import { useParams } from "react-router";
import "./styleGroups.css";
const GroupsPage = ({ members, setLoggedin }) => {
  const { title } = useParams();
  return (
    <div>
      <NavbarSec setLoggedin={setLoggedin} />
      <div className="main-group-div">
        <div className="group-content">
          <p className="groupname-text">👭 {title} 👬</p>
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
    </div>
  );
};

export default GroupsPage;
