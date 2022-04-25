import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Slider from "./components/Slider";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import listOfCountries from "./data/countries";
import "./App.css";

export default function App() {
  return (
    <div className="background">
      <main className="main-container">
        <Toggle defaultOption="Overview" anotherOption="Details" />
        <Tab tabs={["Windows", "Mac", "Linux"]} />
        <Slider labelStep={25} />
        <Input />
        <Dropdown category="Country" list={listOfCountries} />
      </main>
    </div>
  );
}
