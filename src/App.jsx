import "./App.css";
import InlineComponent from "./components/InlineComponent";
import OutlineComponent from "./components/OutlineComponent";
import MidlineComponent from "./components/MidlineComponent";

function App() {
  return (
    <div className="App">
      <InlineComponent />
      <OutlineComponent />
      <MidlineComponent />
    </div>
  );
}

export default App;
