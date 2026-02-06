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
            <div className="readingItem" style={{borderColor: data.humidity >= 60 || data.humidity <= 30 ? "red" : "green"}}>
                <p>
                    <strong>Humidity:</strong> <br></br> {data.humidity.toFixed(1)} %
                </p>
            </div>
            <div className="readingItem" style={{borderColor: data.temperature >= 30 || data.temperature <= 15 ? "red" : "green"}}>
                <p>
                    <strong>Temperature:</strong> <br></br> {data.temperature.toFixed(1)} °C
                </p>
            </div>
        </div>
      ) : (
        <p>Loading sensor data...</p>
      )}
    </div>
  );
};

export default SensorVisuals;
