import Toggle from "./components/Toggle";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Toggle defaultOption="기본" anotherOption="상세" />
    </div>
  );
}
