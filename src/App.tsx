import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import "./App.css";

export default function App() {
  return (
    <main className="main-container">
      <Toggle defaultOption="Overview" anotherOption="Details" />
      <Tab />
    </main>
  );
}
