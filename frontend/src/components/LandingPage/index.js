import React, { useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import { TabContext, TabPanel } from "@material-ui/lab";
import Lottie from "react-lottie";
import animationData from "../assets/loader.json";
import Login from "../Login";
import Signup from "../Signup";
import "./styleLanding.css";

const LandingPage = ({
  setLoggedin,
  setUsername,
  groups,
  setGroups,
  getGroups,
}) => {
  const [value, setValue] = useState("1");
  const [loader, setLoader] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {!loader ? (
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
                  setLoader={setLoader}
                />
              </TabPanel>
              <TabPanel value="2">
                <Signup
                  setLoggedin={setLoggedin}
                  setUsername={setUsername}
                  getGroups={getGroups}
                  setLoader={setLoader}
                />
              </TabPanel>
            </TabContext>
          </div>
        </div>
      ) : (
        <div>
          <div className="loader">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
