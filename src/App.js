import "./App.css";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Heading from "./components/Heading";
import Btn from "./components/Btn";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import USeState from "./components/UseState";

function App() {
  return (
    <div>
      <Navbar />
      <Test />
      <Heading />
      <Btn />
      <CompA
        first="component-removed"
        second="hey welcome"
        tittel="background addjust"
      />
      <CompB tera="hey goggle" p="hey goggle" c="hey goggle" d="props manage" />
      {/* <USeState /> */}
    </div>
  );
}

export default App;
