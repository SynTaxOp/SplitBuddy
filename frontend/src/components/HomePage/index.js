import React, { useEffect, useState } from "react";
import NavbarSec from "./navbar";
import GroupSection from "./groupSection";
import "./styleHome.css";
import CreateGroupModal from "./createGroupModal";

const HomePage = ({ username, setLoggedin }) => {
  const [showModal, setShowModal] = useState(false);
  const [groups, setGroups] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/groups/displayGroup?username=" + username, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <NavbarSec setLoggedin={setLoggedin} />
      <div className="welcome-msg-div">
        <p className="welcome-msg">Welcome {username} &#128075;</p>
      </div>
      <div>
        <GroupSection setShowModal={setShowModal} />
      </div>
      <div>
        <CreateGroupModal
          showModal={showModal}
          setShowModal={setShowModal}
          username={username}
        />
      </div>
    </div>
  );
};

export default HomePage;
