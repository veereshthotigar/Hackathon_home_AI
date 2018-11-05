from picamera import PiCamera
from time import sleep
import boto3
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(2,GPIO.OUT)
client = boto3.client(
	"sns",
	aws_access_key_id="AKIAJ6CMBFUUV4MKJZQA",
	aws_secret_access_key="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",
	region_name="us-east-1"
)
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

def triggerNotification():
	client.publish(
		Message="there is someone at the door!",
		TopicArn="arn:aws:sns:us-east-1:920073451805:camera-notifications"
	)
	
while True:
	time.sleep(5)
	triggerLEDOn()
	time.sleep(5)
	triggerLEDOff()