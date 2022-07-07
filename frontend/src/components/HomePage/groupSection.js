import React from "react";
import { Button } from "@mui/material";
import GroupCard from "./groupCard";

const GroupSection = ({ setShowModal, groups }) => {
  return (
    <div className="groups-div">
      <div className="group-header">
        <p className="my-groups-text">My groups</p>
        <Button
          variant="contained"
          className="add-icon"
          onClick={() => setShowModal(true)}
        >
          Add new group
        </Button>
      </div>
      {!groups.length > 0 ? (
        <div className="img-div">
          <img
            className="no-groups-img"
            src={require("../images/no_groups.png")}
          ></img>
        </div>
      ) : (
        <div className="userGroups">
          {groups.map((element) => {
            return (
              <div>
                <GroupCard
                  title={element.group_name}
                  members={element.members}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GroupSection;
