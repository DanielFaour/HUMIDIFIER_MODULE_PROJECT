#include <DHT.h>
#include <Adafruit_NeoPixel.h>

#define DHTPIN 7        // GPIO 7
#define DHTTYPE DHT11   // try DHT11 first

#define LED_PIN 48
#define NUMPIXELS 1

DHT dht(DHTPIN, DHTTYPE);
Adafruit_NeoPixel pixels(NUMPIXELS, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  Serial.begin(115200);

  pixels.begin();
  pixels.setPixelColor(0, pixels.Color(0, 0, 0));
  pixels.setBrightness(25);
  pixels.show();

  delay(1000);
  dht.begin();
  Serial.println("DHT test started");
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor");
  } else {
    Serial.print("Humidity: ");
    Serial.print(h);
    Serial.print(" %  Temp: ");
    Serial.print(t);
    Serial.println(" C");
    printWiFiStatus(h, t);
  }

  delay(1000);
}

void printWiFiStatus(float h, float t) {
  if (h >= 30 && h <= 50) {
    pixels.setPixelColor(0, pixels.Color(0, 255, 0));  // green
  } else {
    pixels.setPixelColor(0, pixels.Color(255, 0, 0));  // red
  }
  pixels.show();
}