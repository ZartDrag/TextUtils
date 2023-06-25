import "./App.css";
import Navbar from "./Components/Navbar";
// import TextArea from "./Components/TextArea";
import About from "./About";

const name = "TextUtils";
function App() {
  return (
    <div>
      <Navbar title={name} />
      <div className="container my-3">
        {/* <TextArea heading="Enter the text to be processed" /> */}
        <About/>
      </div>
    </div>
  );
}

export default App;
