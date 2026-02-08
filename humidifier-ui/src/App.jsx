import "./App.css";
import SensorVisuals from "./components/sensorVisuals";

function App() {
  return (
    <div>
      <div id="monitorContainer">
        <h1>Humidity Monitor</h1>
        <SensorVisuals />
        <p>🟢 Tolerable conditions 🔴 Severe conditions</p>
      </div>
      <div id="settingsContainer">
        <h2>Settings</h2>
        <p>More features coming soon...</p>
      </div>
    </div>
  );
}

export default App;
