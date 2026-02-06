import { useState, useEffect } from "react";

const ESP32_IP = "192.168.0.196";
const FETCH_INTERVAL = 3000;

export const useESP32Data = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [ip] = useState(ESP32_IP);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://${ESP32_IP}/data`, {
          mode: "cors",        
          cache: "no-cache"    
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to connect to ESP32");
        console.error("Sensor fetch failed:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, FETCH_INTERVAL);

    // cleanup
    return () => clearInterval(interval);
  }, []); // 

  return { data, error, ip };
};