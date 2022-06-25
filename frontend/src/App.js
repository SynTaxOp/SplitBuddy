import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [username, setUsername] = useState();
  const [pass, setPassword] = useState();

  const submitForm = () => {
    console.log(username, pass);
    fetch("http://localhost:8080/", {
      method: "POST",
      body: JSON.stringify({ email: username, password: pass }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  };
  return (
    <div className="App">
      <form>
        <label>Email</label>
        <input
          type="email"
          name="Email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
