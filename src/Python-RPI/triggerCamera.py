from picamera import PiCamera
from time import sleep
import boto3
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(2,GPIO.OUT)
camera = PiCamera()

def previewImage():
	camera.start_preview()
	sleep(5)
	camera.capture('/home/pi/Desktop/image.jpg')
	camera.stop_preview()

def triggerLEDOn():
	print "LED on"
	GPIO.output(2,GPIO.HIGH)

def triggerLEDOff():
	print "LED off"
	GPIO.output(2,GPIO.LOW)
	
while True:
	time.sleep(5)
	triggerLEDOn()
	time.sleep(5)
	triggerLEDOff()