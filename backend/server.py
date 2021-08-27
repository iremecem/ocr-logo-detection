from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from PIL import Image
import os
import io

from ocr.ocr import OCR


app = FastAPI()


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

@app.post("/ocr/")
async def create_upload_file(file: UploadFile = File(...)):

    file.filename = "lele.jpg"

    contents = await file.read()
    #path = f"{file.filename}"

    image = Image.open(io.BytesIO(contents))
    # image.show()

    # with open(path, "wb") as f:
    #     f.write(contents)

    ocr = OCR(image)
    print(ocr.extract_text())
    return ocr.extract_text()

    # os.remove(path)



