import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
// import About from "./About";
import { useState } from "react";
import Alert from "./Components/Alert";

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
    <div>
      <Navbar title={name} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} fireAlert={fireAlert} />
      <div className="container my-3">
        <TextArea
          heading="Enter the text to be processed"
          mode={mode}
          fireAlert={fireAlert}
        />
        {/* <About mode={mode} /> */}
      </div>
    </div>
  );
}

export default App;
