import React from "react";
import NavbarSec from "../HomePage/navbar";
import { useParams } from "react-router";
import "./styleGroups.css";
const GroupsPage = () => {
  const { title } = useParams();
  return (
    <div>
      <NavbarSec />
      <div className="main-group-div">
        <div className="group-content">
          <p className="groupname-text">{title}</p>
        </div>
        <div className="members-div">
          <p className="member-text">👭 Members 👬</p>
        </div>
      </div>
    </div>
  );
};

export default GroupsPage;
