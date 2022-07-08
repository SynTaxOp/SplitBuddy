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
                />
              }
            ></Route>
            <Route
              exact
              path="/groups/:title"
              element={
                <GroupsPage members={members} setLoggedin={setLoggedin} />
              }
            ></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
