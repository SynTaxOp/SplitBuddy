import React, { useEffect, useState } from "react";
import NavbarSec from "./navbar";
import GroupSection from "./groupSection";
import "./styleHome.css";
import CreateGroupModal from "./createGroupModal";

const HomePage = ({ username, setLoggedin, groups }) => {
  const [showModal, setShowModal] = useState(false);
  // var [groups, setGroups] = useState();
  // useEffect(() => {
  //   fetch("http://localhost:8080/groups/displayGroup?username=" + username, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data.Groups);
  //       var grp = data.Groups;
  //       console.log(grp[0]);
  //       console.log(typeof grp);
  //       groups = grp;
  //       console.log(groups);
  //     });
  // }, [groups]);
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
