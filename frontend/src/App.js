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
                />
              }
            ></Route>
            <Route
              exact
              path="/groups"
              element={
                <LandingPage
                  setLoggedin={setLoggedin}
                  setUsername={setUsername}
                  groups={groups}
                  setGroups={setGroups}
                  username={username}
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
                />
              }
            ></Route>
            <Route exact path="/groups/:title" element={<GroupsPage />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
