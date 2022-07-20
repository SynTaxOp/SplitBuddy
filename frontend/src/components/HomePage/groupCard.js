import React from "react";
import { useNavigate } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import "./styleHome.css";
import DeleteIcon from "@mui/icons-material/Delete";
const GroupCard = ({
  title,
  username,

  getGroups,

  getMembersList,
}) => {
  const navigate = useNavigate();

  const showgroupsPage = async (username, title) => {
    await getMembersList(username, title);
    navigate(`/groups/${title}`);
  };

  const deleteGroup = async (title, username) => {
    await fetch(
      "http://localhost:8080/groups/deleteGroup?username=" +
        username +
        "&title=" +
        title,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          console.log(data);
          getGroups(username);
        });
      }
    });
  };
  return (
    <div className="groups-cards">
      <div className="card-div" onClick={() => showgroupsPage(username, title)}>
        <div className="card-content">
          <div className="group-icon">👥</div>
          <p className="group-title">{title}</p>
        </div>
      </div>
      <div
        className="delete-icon-div"
        onClick={() => deleteGroup(title, username)}
      >
        <DeleteIcon className="delete-icon" color="error" />
      </div>
    </div>
  );
};

export default GroupCard;
