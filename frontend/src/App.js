import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
function App() {
  const [username, setUsername] = useState();
  const [isLoggedin, setLoggedin] = useState(false);

  return (
    <div className="App">
      <Router>
        {!isLoggedin ? (
          <Routes>
            <Route
              exact
              path="/"
              element={
                <LandingPage
                  setLoggedin={setLoggedin}
                  setUsername={setUsername}
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
                <HomePage username={username} setLoggedin={setLoggedin} />
              }
            ></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
