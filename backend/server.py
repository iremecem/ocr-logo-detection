from fastapi import FastAPI, File, UploadFile, Response
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import StreamingResponse

from PIL import Image
import os
import io
import uuid
import cv2
import base64

from ocr.ocr import OCR
from logo.logo import LogoDetector


app = FastAPI()

IMAGEDIR = "images/"

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def get_root():
    return {"hello" : "world"}

@app.post("/logo/")
async def create_upload_file(file: UploadFile = File(...)):

    file_type = "." + file.content_type.split("/")[1]
    file_name = f"{uuid.uuid4()}{file_type}"

    contents = await file.read()
    path = f"{IMAGEDIR}{file_name}"
    with open(path, "wb") as f:
        f.write(contents)

    detector = LogoDetector(file_name)
    detector.detect()
    result = detector.get_result()

    image = result["image"]
    company_name = result["company_name"]

    #_, logo_image = cv2.imencode(".jpg", image)
    #logo_image = base64.b64encode(logo_image)

    #StreamingResponse(io.BytesIO(logo_image.tobytes()), media_type="image/jpg")

    return {"image": image, "company_name": company_name}


@app.post("/ocr/")
async def create_upload_file(file: UploadFile = File(...)):

    contents = await file.read()
    image = Image.open(io.BytesIO(contents))

    ocr = OCR(image)
    print(ocr.extract_text())

    return ocr.extract_text()



