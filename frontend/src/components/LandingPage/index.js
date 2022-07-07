import React, { useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import { TabContext, TabPanel } from "@material-ui/lab";
import Login from "../Login";
import Signup from "../Signup";
import "./styleLanding.css";

const LandingPage = ({ setLoggedin, setUsername, groups, setGroups }) => {
  const [value, setValue] = useState("1");
  const getGroups = (username) => {
    fetch("http://localhost:8080/groups/displayGroup?username=" + username, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.Groups);
        var grp = data.Groups;
        console.log(grp[0]);
        console.log(typeof grp);
        groups = grp;
        console.log("groups", groups);
        setGroups(groups);
      });
  };
  return (
    <div className="main-container">
      <div className="tab-container">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              className="tab"
              onChange={(e, newValue) => {
                setValue(newValue);
              }}
              aria-label="lab API tabs example"
            >
              <Tab label="Login " value="1" className="tab" />
              <Tab label="SignUp" value="2" className="tab" />
            </Tabs>
          </Box>
          <TabPanel value="1">
            <Login
              setLoggedin={setLoggedin}
              setUsername={setUsername}
              groups={groups}
              setGroups={setGroups}
              getGroups={getGroups}
            />
          </TabPanel>
          <TabPanel value="2">
            <Signup
              setLoggedin={setLoggedin}
              setUsername={setUsername}
              getGroups={getGroups}
            />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default LandingPage;
