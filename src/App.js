import "./App.css";
import Navbar from "./Components/Navbar";
// import TextArea from "./Components/TextArea";
import About from "./About";
import { useState } from "react";

const name = "TextUtils";
function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    }
  };
  return (
    <div>
      <Navbar
        title={name}
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        {/* <TextArea heading="Enter the text to be processed" /> */}
        <About mode={mode} />
      </div>
    </div>
  );
}

export default App;
