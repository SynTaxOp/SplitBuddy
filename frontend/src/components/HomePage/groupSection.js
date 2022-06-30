import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const GroupSection = () => {
  return (
    <div className="groups-div">
      <div className="group-header">
        <p className="my-groups-text">My groups</p>
        <AddCircleIcon className="add-icon" />
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
