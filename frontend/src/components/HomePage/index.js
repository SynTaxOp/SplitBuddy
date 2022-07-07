import React, { useEffect, useState } from "react";
import NavbarSec from "./navbar";
import GroupSection from "./groupSection";
import "./styleHome.css";
import CreateGroupModal from "./createGroupModal";

const HomePage = ({ username, setLoggedin, groups }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <NavbarSec setLoggedin={setLoggedin} />
      <div className="welcome-msg-div">
        <p className="welcome-msg">Welcome {username} &#128075;</p>
      </div>
      <div>
        <GroupSection setShowModal={setShowModal} groups={groups} />
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
