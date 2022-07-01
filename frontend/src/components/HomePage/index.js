import React, { useState } from "react";
import NavbarSec from "./navbar";
import GroupSection from "./groupSection";
import "./styleHome.css";
import CreateGroupModal from "./createGroupModal";

const HomePage = ({ username, setLoggedin }) => {
  const [showModal, setShowModal] = useState(false);

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
        <CreateGroupModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default HomePage;
