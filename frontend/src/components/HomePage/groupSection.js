import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const GroupSection = ({ setShowModal }) => {
  return (
    <div className="groups-div">
      <div className="group-header">
        <p className="my-groups-text">My groups</p>
        <AddCircleIcon
          className="add-icon"
          onClick={() => setShowModal(true)}
        />
      </div>
      <div className="img-div">
        <img
          className="no-groups-img"
          src={require("../images/no_groups.png")}
        ></img>
      </div>
    </div>
  );
};

export default GroupSection;
