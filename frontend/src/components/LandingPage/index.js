import React, { useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import { TabContext, TabPanel } from "@material-ui/lab";
import Login from "../Login";
import Signup from "../Signup";
import "./styleLanding.css";

const LandingPage = () => {
  const [value, setValue] = useState("1");

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
            <Login />
          </TabPanel>
          <TabPanel value="2">
            <Signup />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default LandingPage;
