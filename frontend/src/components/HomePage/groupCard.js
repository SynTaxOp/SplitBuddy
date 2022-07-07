import React from "react";
import { useNavigate } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import "./styleHome.css";

const GroupCard = ({ title, members }) => {
  const navigate = useNavigate();
  return (
    <div className="card-div" onClick={() => navigate(`/groups/${title}`)}>
      <div className="card-content">
        <GroupIcon className="group-icon" />
        <p className="group-title">{title}</p>
      </div>
    </div>
  );
};

export default GroupCard;
