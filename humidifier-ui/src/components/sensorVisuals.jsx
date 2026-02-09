import { useESP32Data } from "../hooks/ESP32Data";
import ProgressBar from './progressBar';

export const SensorVisuals = () => {
  const { data, error, ip } = useESP32Data();

  return (
    <div>
      {error && (
        <div style={{ color: "red" }}>
          Error: {error} (check if ESP32 is running at {ip})
        </div>
      )}

      {data ? (
        <div id="readingsContainer">
            <div className="readingItem">
                <p className="readingName">Humidity:</p>
                <p className="readingNumber">{data.humidity.toFixed(0)} %</p>
                <p>Indicator:</p>
                <ProgressBar data={data.humidity} upper={60} lower={30} />
            </div>
            <div className="readingItem">
                <p className="readingName">Temperature:</p>
                <p className="readingNumber">{data.temperature.toFixed(1)} °C</p>
                <p>Indicator:</p>
                <ProgressBar data={data.temperature} upper={28} lower={20} />
            </div>
        </div>
      ) : (
        <p>Loading sensor data...</p>
      )}
    </div>
  );
};

export default SensorVisuals;
