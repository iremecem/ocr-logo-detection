import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios';
import upload_logo from '../../assets/images/add_file_v2.svg';
import './UploadImage.css'

import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

import Dropzone, {useDropzone} from 'react-dropzone';


export default function UploadImage(props) {

    const history = useHistory();

    const [fileName, setFileName] = useState("no file selected")

    const [files, setFiles] = useState([]);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        maxFiles: 1,
        accept: 'image/*',
        onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        acceptedFiles.forEach((file) => {
            setFileName(file.name)
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
            // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        });
        },
        onDropRejected: () => {
          console.log('file dropping was rejected')
        }
    }
    );

    const thumbs = files.map(file => (
        <div  key={file.name}>
          <div >
            <img
              src={file.preview}
            />
          </div>
        </div>
      ));

      useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
      }, [files]);

      const handleClick = () => {
        // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        // let fd = new FormData();

        // fd.append('file', files[0])

        // axios.post('http://127.0.0.1:8000/ocr/', fd, config)
        //   .then((response) => {
        //     console.log(response);
        //   })
        //   .catch(error => {
        //       console.log(error);
        //   })

          history.push({
            pathname: '/result',
            state: { file: files[0] }
          })
      }

    
    return (
        <div className="upload-container">
            <div className="upload-area">
            <section>
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <img className="upload-image-logo" src={upload_logo}></img>
                    <p style={{fontWeight: 'bold', fontSize: '16px'}}>Drag 'n' drop some files here, or click to select files</p>
                    <p>{fileName}</p>
                </div>
            </section> 
            </div>
            <div className="ln-selection-container">
            </div>
            <div className="scan-button-container">
                <Button className="scan-button" onClick={handleClick}>Scan Document</Button>
            </div>
            <aside>
                {thumbs}
            </aside>
        </div>
        )
    }

