import "./App.css";
import InlineComponent from "./components/InlineComponent";
import OutlineComponent from "./components/OutlineComponent";
import MidlineComponent from "./components/MidlineComponent";

function App() {
  return (
    <div className="App">
      <InlineComponent year="2026" />
      <OutlineComponent year2="2026" />
      <MidlineComponent year3="2026" />
    </div>
  );
}
export default App;
