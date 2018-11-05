#include <ESP8266WiFi.h>

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println();
  WiFi.disconnect();
  delay(1000);
  Serial.print("Nearby networks found :");
  Serial.println(WiFi.scanNetworks());
  delay(1000);

  Serial.println("List of networks :");
  int n = WiFi.scanNetworks();
  for(int i=0;i<n;i++)
  {
    Serial.println(WiFi.SSID(i));
  }
  Serial.println("Scan completed");
}

void loop() {
  // put your main code here, to run repeatedly:

}
