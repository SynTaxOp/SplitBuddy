import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import GroupsPage from "./components/GroupsPage";

function App() {
  const [username, setUsername] = useState();
  const [isLoggedin, setLoggedin] = useState(false);
  var [groups, setGroups] = useState([]);
  var [members, setMembers] = useState([]);
  var [splitData, setSplitData] = useState([]);

  const getGroups = (username) => {
    fetch("http://localhost:8080/groups/getGroups?username=" + username, {
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

  const getSplitwise = async (username, title) => {
    fetch(
      "http://localhost:8080/transaction/generateSplitwise?username=" +
        username +
        "&title=" +
        title,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        var output = data;
        splitData = output;
        setSplitData(splitData);
      });
  };
  const getMembersList = async (username, title) => {
    await fetch(
      "http://localhost:8080/groups/getMembers?username=" +
        username +
        "&title=" +
        title,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          console.log(data.members);
          var memberArr = data.members;
          members = memberArr;
          setMembers(members);
          console.log(members);
          getSplitwise(username, title);
        });
      }
    });
  };
  return (
    <div className="App">
      <Router>
        {!isLoggedin ? (
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  setLoggedin={setLoggedin}
                  setUsername={setUsername}
                  groups={groups}
                  setGroups={setGroups}
                  username={username}
                  getGroups={getGroups}
                />
              }
            ></Route>
            <Route
              exact
              path="/groups/:title"
              element={
                <LandingPage
                  setLoggedin={setLoggedin}
                  setUsername={setUsername}
                  groups={groups}
                  setGroups={setGroups}
                  username={username}
                  getGroups={getGroups}
                />
              }
            ></Route>
          </Routes>
        ) : (
          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomePage
                  username={username}
                  setLoggedin={setLoggedin}
                  groups={groups}
                  memebers={members}
                  setMembers={setMembers}
                  getGroups={getGroups}
                  getSplitwise={getSplitwise}
                  getMembersList={getMembersList}
                />
              }
            ></Route>
            <Route
              exact
              path="/groups/:title"
              element={
                <GroupsPage
                  members={members}
                  setLoggedin={setLoggedin}
                  username={username}
                  splitData={splitData}
                  getSplitwise={getSplitwise}
                  getMembersList={getMembersList}
                />
              }
            ></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
