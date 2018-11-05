#include <ESP8266WiFi.h>
char ssid[] = "VThotigar-airtel";
char pswd[] = "1qaz2wsx";
void setup() {
  Serial.begin(9600);
  delay(500);
  Serial.print("Connecting to ...");
  Serial.println(ssid);
  delay(500);
  //Wifi disconnect
  WiFi.disconnect();
  WiFi.begin(ssid,pswd);
  while( WiFi.status() != 3 )
  {
    delay(1000);
    Serial.println(WiFi.status());
   }
   //print details
   Serial.print("SSID ...");
   Serial.println(WiFi.SSID());
   Serial.print("Successfully connected ...");
   Serial.print("");
   Serial.println(WiFi.localIP());
   WiFi.printDiag(Serial);
}

void loop() {
  // put your main code here, to run repeatedly:

}
