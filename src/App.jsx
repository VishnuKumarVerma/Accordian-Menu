import "./App.css";
import Accordian from "./Component/Accordian";
import Header from "./Component/Header";
import "./App.css";
import videoBackground from "./assets/Main-Back.mp4";

function App() {
  return (
    <div className="container">
      {/* Learning 4 */}
      <video autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </video>
      {/* Learning 4 Ends*/}

      <div className="container-elements">
        <Header />
        <Accordian />
      </div>
    </div>
  );
}

export default App;
