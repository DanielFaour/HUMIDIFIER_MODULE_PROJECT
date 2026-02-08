import { useESP32Data } from "../hooks/ESP32Data";

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
                <div id="indicator" style={{width: `${data.humidity}%`, backgroundColor: data.humidity > 60 || data.humidity < 30 ? "red" : "green"}}></div>
            </div>
            <div className="readingItem">
                <p className="readingName">Temperature:</p>
                <p className="readingNumber">{data.temperature.toFixed(1)} °C</p>
                <p>Indicator:</p>
                <div id="indicator" style={{width: `${data.temperature}%`, backgroundColor: data.temperature > 26 || data.temperature < 16 ? "red" : "green"}}></div>
            </div>
        </div>
      ) : (
        <p>Loading sensor data...</p>
      )}
    </div>
  );
};

export default SensorVisuals;
