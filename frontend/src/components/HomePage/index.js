import React from "react";
import NavbarSec from "./navbar";
const HomePage = ({ username, setLoggedin }) => {
  return (
    <div>
      <NavbarSec setLoggedin={setLoggedin} />
      <p>Welcome {username}</p>
    </div>
  );
};

export default HomePage;
