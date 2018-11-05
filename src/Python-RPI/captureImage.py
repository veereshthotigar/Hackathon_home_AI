#!/usr/bin/python

from picamera import PiCamera
from time import sleep

camera = PiCamera()
camera.resolution = (640, 480)
camera.start_preview()

camera.capture('/home/pi/Desktop/image.jpg')
camera.stop_preview()
