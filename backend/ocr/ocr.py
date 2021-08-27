import cv2
import pytesseract
import os
import re
import time
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
from spellchecker import SpellChecker
import sys

from PIL import Image
from cv2 import cvtColor, COLOR_BGR2RGB
from numpy import array


def get_text(img_path):
    # Read image with opencv
    img = cv2.imread(img_path)

    # Convert to gray
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # Apply dilation and erosion to remove some noise
    kernel = np.ones((1, 1), np.uint8)
    img = cv2.dilate(img, kernel, iterations=1)
    img = cv2.erode(img, kernel, iterations=1)
    # cv2.imshow(winname='c' ,mat=img)
    
    # Write the image after apply opencv to do some ...
    cv2.imwrite("thres.png", img)
    # Recognize text with tesseract for python
    custom_config = r'--oem 3 --psm 3'
    result = pytesseract.image_to_string(Image.open("thres.png"), config=custom_config)
    print(result)
    os.remove("thres.png")

    checker = SpellChecker()
    all_words = checker.split_words(result)

    misspelled_words = list(checker.unknown(all_words))

    for misspelled_word in misspelled_words:
        insensitive_word = re.compile(re.escape(misspelled_word), re.IGNORECASE)
        result = insensitive_word.sub('', result)

    return result.strip()

def get_textv2(img): 
    img = cvtColor(array(img), COLOR_BGR2RGB)

    # Convert to gray
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # Apply dilation and erosion to remove some noise
    kernel = np.ones((1, 1), np.uint8)
    img = cv2.dilate(img, kernel, iterations=1)
    img = cv2.erode(img, kernel, iterations=1)
    # cv2.imshow(winname='c' ,mat=img)
    
    # Write the image after apply opencv to do some ...
    cv2.imwrite("thres.png", img)
    # Recognize text with tesseract for python
    custom_config = r'--oem 3 --psm 3'
    result = pytesseract.image_to_string(Image.open("thres.png"), config=custom_config)
    os.remove("thres.png")

    checker = SpellChecker()
    all_words = checker.split_words(result)

    misspelled_words = list(checker.unknown(all_words))
    print(misspelled_words)

    for misspelled_word in misspelled_words:
        insensitive_word = re.compile(re.escape(misspelled_word), re.IGNORECASE)
        result = insensitive_word.sub('', result)

    return result.strip()



class OCR():
    def __init__(self, img_path):
        self.img_path = img_path

    def extract_text(self):
        text = get_textv2(self.img_path)
        return text

    def clear_workspace(self):
        os.system('rm line_box*')

if __name__ == '__main__':
    from sys import argv

    if len(argv)<2:
        print("Usage: python image-to-text.py relative-filepath")
    else:
        print('--- Start recognize text from image ---')
        for i in range(1,len(argv)):
            print(argv[i])
            print(get_text(argv[i]))
            print()
            print()

        print('------ Done -------')
