import React, { useState } from "react";
import NavbarSec from "./navbar";
import GroupSection from "./groupSection";
import "./styleHome.css";
import CreateGroupModal from "./createGroupModal";

const HomePage = ({
  username,
  setLoggedin,
  groups,
  members,
  setMembers,
  getGroups,
  getSplitwise,
  getMembersList,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <NavbarSec setLoggedin={setLoggedin} />
      <div className="welcome-msg-div">
        <p className="welcome-msg">Welcome {username} &#128075;</p>
      </div>
      <div>
        <GroupSection
          setShowModal={setShowModal}
          groups={groups}
          username={username}
          members={members}
          setMembers={setMembers}
          getGroups={getGroups}
          getSplitwise={getSplitwise}
          getMembersList={getMembersList}
        />
      </div>

      <div>
        <CreateGroupModal
          showModal={showModal}
          setShowModal={setShowModal}
          username={username}
          getGroups={getGroups}
        />
      </div>
    </div>
  );
};

export default HomePage;
