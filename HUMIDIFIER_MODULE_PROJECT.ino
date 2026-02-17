#include <WiFi.h>
#include <WebServer.h>
#include <DHT.h>
#include <Adafruit_NeoPixel.h>

#define DHTPIN 7
#define DHTTYPE DHT11
#define LED_PIN 48
#define NUMPIXELS 1

DHT dht(DHTPIN, DHTTYPE);
Adafruit_NeoPixel pixels(NUMPIXELS, LED_PIN, NEO_GRB + NEO_KHZ800);

WebServer server(80);
const char* ssid = "DAF";
const char* password = "pikk1337";

float currentHumidity = 0.0;
float currentTemperature = 0.0;

void setup() {
  Serial.begin(115200);

  pixels.begin();
  pixels.setPixelColor(0, pixels.Color(0, 0, 0));
  pixels.setBrightness(10);
  pixels.show();

  dht.begin();
  delay(1000);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to ");
  Serial.println(ssid);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.print("ESP32 IP address: ");
  Serial.println(WiFi.localIP());

  // Route
  server.on("/data", HTTP_GET, handleData);

  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient();
  
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor");
  } else {
    currentHumidity = h;
    currentTemperature = t;

    Serial.print("Humidity: ");
    Serial.print(h);
    Serial.print(" %  Temp: ");
    Serial.print(t);
    Serial.println(" C");

    updateLED(h);
  }

  delay(1000);
}

void handleData() {
  // CORS headers for React dev server
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  server.sendHeader("Access-Control-Allow-Headers", "Content-Type");

  // JSON output to server
  String json = "{\"humidity\":" + String(currentHumidity, 1) + ",\"temperature\":" + String(currentTemperature, 1) + "}";

  server.send(200, "application/json", json);
}

void updateLED(float h) {
  if (h >= 30 && h <= 50) {
    pixels.setPixelColor(0, pixels.Color(0, 255, 0));  // green
  } else {
    pixels.setPixelColor(0, pixels.Color(255, 0, 0));  // red
  }
  pixels.show();
}