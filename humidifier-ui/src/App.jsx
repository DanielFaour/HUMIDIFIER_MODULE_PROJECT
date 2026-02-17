import "./App.css";
import SensorVisuals from "./components/sensorVisuals";
import Settings from "./components/settings";
import { useEffect, useState } from "react";

function App() {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("settings");
    return saved
      ? JSON.parse(saved)
      : {
          humidityUpper: 60,
          humidityLower: 30,
          temperatureUpper: 25,
          temperatureLower: 18,
        };
  });

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <div>
      <div id="monitorContainer">
        <h1>Humidity Monitor</h1>
        <SensorVisuals
          humidityUpper={settings.humidityUpper}
          humidityLower={settings.humidityLower}
          tempUpper={settings.temperatureUpper}
          tempLower={settings.temperatureLower}
        />
        <p>🟢 Tolerable conditions 🔴 Severe conditions</p>
      </div>
      <Settings settings={settings} setSettings={setSettings} />
    </div>
  );
}

export default App;
