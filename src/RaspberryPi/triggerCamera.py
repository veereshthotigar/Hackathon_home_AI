from picamera import PiCamera
from time import sleep
import boto3

client = boto3.client(
	"sns",
	aws_access_key_id="AKIAJ6CMBFUUV4MKJZQA",
	aws_secret_access_key="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",
	region_name="us-east-1"
)

camera = PiCamera()
camera.start_preview()
sleep(5)
camera.capture('/home/pi/Desktop/image.jpg')
camera.stop_preview()

client.publish(
	Message="there is someone at the door!",
	TopicArn="arn:aws:sns:us-east-1:920073451805:camera-notifications"
)