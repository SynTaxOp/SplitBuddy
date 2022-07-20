import React from "react";
import { useNavigate } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import "./styleHome.css";
import DeleteIcon from "@mui/icons-material/Delete";
const GroupCard = ({ title, username, members, setMembers, getGroups }) => {
  const navigate = useNavigate();

  const showgroupsPage = () => {
    fetch(
      "http://localhost:8080/groups/getMembers?username=" +
        username +
        "&title=" +
        title,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          console.log(data.members);
          var memberArr = data.members;
          members = memberArr;
          setMembers(members);
          console.log(members);
        });
      }
    });
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
          getGroups();
        });
      }
    });
  };
  return (
    <div className="groups-cards">
      <div className="card-div" onClick={showgroupsPage}>
        <div className="card-content">
          <div className="group-icon">👥</div>
          <p className="group-title">{title}</p>
        </div>
      </div>
      <div className="delete-icon-div">
        <DeleteIcon
          className="delete-icon"
          color="error"
          onClick={() => deleteGroup(title, username)}
        />
      </div>
    </div>
  );
};

export default GroupCard;
