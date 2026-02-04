import { useESP32Data } from './components/ESP32Data';   // adjust path if needed

function App() {
  const { data, error, ip } = useESP32Data();

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>ESP32 Sensor Readings</h1>

      {error && (
        <div style={{ color: 'crimson', marginBottom: '1rem' }}>
          Error: {error} (check if ESP32 is running at {ip})
        </div>
      )}

      {data ? (
        <div style={{ fontSize: '1.2rem' }}>
          <p>
            <strong>Humidity:</strong> {data.humidity.toFixed(1)} %
          </p>
          <p>
            <strong>Temperature:</strong> {data.temperature.toFixed(1)} °C
          </p>
        </div>
      ) : (
        <p style={{ color: '#666' }}>Loading sensor data...</p>
      )}
    </div>
  );
}

export default App;