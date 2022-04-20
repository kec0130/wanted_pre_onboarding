import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Input from "./components/Input";
import "./App.css";

export default function App() {
  return (
    <main className="main-container">
      <Toggle defaultOption="Overview" anotherOption="Details" />
      <Tab tabs={["Windows", "Mac", "Linux"]} />
      <Input />
    </main>
  );
}
