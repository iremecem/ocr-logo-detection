import os
import json
import pathlib
import cv2
import base64

ROOT = str(pathlib.Path().absolute())

class LogoDetector():
    def __init__(self, img_path):
        self.img_path = img_path

    def detect(self):
        image_path = ROOT + "/images/" + self.img_path
        out_path = "result.json"
        darknet_path = ROOT + "/darknet/"

        os.chdir("darknet/")

        os.system('./darknet detector test data/obj.data cfg/yolov4-custom.cfg backup/yolov4-custom_best.weights -dont_show -out ' + out_path + ' ' + image_path + ' -thresh 0.3')


    def get_result(self):

        with open(ROOT + '/darknet/result.json') as json_file:
            data = json.load(json_file)
            if len(data[0]['objects']) > 0:
                company_name = data[0]['objects'][0]['name'].split('-')[0]
            print(company_name)

        
        img_path = ROOT + "/darknet/predictions.jpg"
        with open(img_path, "rb") as image_file:
            image = base64.b64encode(image_file.read())
        
        return {"image": image, "company_name": company_name}

