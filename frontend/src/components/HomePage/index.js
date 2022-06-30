import React from "react";
import NavbarSec from "./navbar";
import GroupSection from "./groupSection";
import "./styleHome.css";

const HomePage = ({ username, setLoggedin }) => {
  return (
    <div>
      <NavbarSec setLoggedin={setLoggedin} />
      <div className="welcome-msg-div">
        <p className="welcome-msg">Welcome {username} &#128075;</p>
      </div>
      <div>
        <GroupSection />
      </div>
    </div>
  );
};

export default HomePage;
