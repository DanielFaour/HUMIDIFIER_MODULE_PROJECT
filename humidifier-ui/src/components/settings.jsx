import React from "react";

export default function Settings({ settings, setSettings }) {
  const handleHumidityUpperChange = (value) => {
    const numValue = Number(value);
    if (numValue < settings.humidityLower) {
      setSettings({ ...settings, humidityUpper: settings.humidityLower });
    } else {
      setSettings({ ...settings, humidityUpper: numValue });
    }
  };

  const handleHumidityLowerChange = (value) => {
    const numValue = Number(value);
    if (numValue > settings.humidityUpper) {
      setSettings({ ...settings, humidityLower: settings.humidityUpper });
    } else {
      setSettings({ ...settings, humidityLower: numValue });
    }
  };

  const handleTempUpperChange = (value) => {
    const numValue = Number(value);
    if (numValue < settings.temperatureLower) {
      setSettings({ ...settings, temperatureUpper: settings.temperatureLower });
    } else {
      setSettings({ ...settings, temperatureUpper: numValue });
    }
  };

  const handleTempLowerChange = (value) => {
    const numValue = Number(value);
    if (numValue > settings.temperatureUpper) {
      setSettings({ ...settings, temperatureLower: settings.temperatureUpper });
    } else {
      setSettings({ ...settings, temperatureLower: numValue });
    }
  };

  return (
    <div id="settingsContainer">
      <h1>Settings</h1>
      <p>Adjust the thresholds for monitoring indicators.</p>
      <div className="settingsContent">
        <p>Humidty slider:</p>
        <div id="sliderContainer">
          <div className="track" id="sliderTrack"></div>
          <input
            className="track"
            type="range"
            id="humidityUpper"
            value={settings.humidityUpper}
            max={100}
            min={0}
            onChange={(e) => handleHumidityUpperChange(e.target.value)}
          />
          <input
            className="track"
            type="range"
            id="humidityLower"
            value={settings.humidityLower}
            max={100}
            min={0}
            onChange={(e) => handleHumidityLowerChange(e.target.value)}
          />
        </div>
        <p>Temperature slider:</p>
        <div id="sliderContainer">
          <div className="track" id="sliderTrack"></div>
          <input
            className="track"
            type="range"
            id="temperatureUpper"
            value={settings.temperatureUpper}
            max={100}
            min={0}
            onChange={(e) => handleTempUpperChange(e.target.value)}
          />
          <input
            className="track"
            type="range"
            id="temperatureLower"
            value={settings.temperatureLower}
            max={100}
            min={0}
            onChange={(e) => handleTempLowerChange(e.target.value)}
          />
        </div>

        {/* <span>Upper:</span>
        <input
          type="number"
          value={settings.humidityUpper}
          max={100}
          min={0}
          onChange={(e) =>
            setSettings({ ...settings, humidityUpper: Number(e.target.value) })
          }
        />
        <input
          type="number"
          value={settings.humidityLower}
          max={100}
          min={0}
          onChange={(e) =>
            setSettings({ ...settings, humidityLower: Number(e.target.value) })
          }
        />
        <p>Adjust the thresholds for temperature.</p>
        <input
          type="number"
          value={settings.temperatureUpper}
          max={100}
          min={0}
          onChange={(e) =>
            setSettings({ ...settings, temperatureUpper: Number(e.target.value) })
          }
        />
        <input
          type="number"
          value={settings.temperatureLower}
          max={100}
          min={0}
          onChange={(e) =>
            setSettings({ ...settings, temperatureLower: Number(e.target.value) })
          }
        /> */}
      </div>
    </div>
  );
}
