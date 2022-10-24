import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./Components/Layout/Navbar";
import Main from "./Components/Layout/Main";

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
