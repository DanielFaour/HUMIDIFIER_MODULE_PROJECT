import { useESP32Data } from "../hooks/ESP32Data";
import ProgressBar from "./progressBar";

export const SensorVisuals = ({
  humidityUpper = 60,
  humidityLower = 30,
  tempUpper = 28,
  tempLower = 20,
}) => {
  const { data, error, ip } = useESP32Data();

  return (
    <div>
      {data ? (
        <div id="readingsContainer">
          <div className="readingItem">
            <p className="readingName">Humidity:</p>
            <p className="readingNumber">{data.humidity.toFixed(0)} %</p>
            <p>Indicator:</p>
            <ProgressBar
              data={data.humidity}
              upper={humidityUpper}
              lower={humidityLower}
            />
          </div>
          <div className="readingItem">
            <p className="readingName">Temperature:</p>
            <p className="readingNumber">{data.temperature.toFixed(1)} °C</p>
            <p>Indicator:</p>
            <ProgressBar
              data={data.temperature}
              upper={tempUpper}
              lower={tempLower}
            />
          </div>
        </div>
      ) : (
        <p>Loading sensor data...</p>
      )}
      {error && (
        <div style={{ color: "red" }}>
          Error: {error} (check if ESP32 is running at {ip})
        </div>
      )}
    </div>
  );
};

export default SensorVisuals;
