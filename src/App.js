import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import About from "./About";
import { useState } from "react";
import Alert from "./Components/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const name = "TextUtils";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const fireAlert = (type, message) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      fireAlert("success", "Light Mode enabled");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#041d59";
      fireAlert("success", "Dark Mode enabled");
    }
  };
  return (
    <Router>
      <div>
        <Navbar title={name} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} fireAlert={fireAlert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextArea
                heading="Enter the text to be processed"
                mode={mode}
                fireAlert={fireAlert}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
