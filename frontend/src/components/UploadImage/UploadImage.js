import React, { Component } from 'react'
import upload_logo from '../../assets/images/add_file_v2.svg';
import './UploadImage.css'

import Button from '@material-ui/core/Button';
import Dropzone from 'react-dropzone';

export default class UploadImage extends Component {
    
    render() {
        return (
            <div className="upload-container">
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <img className="upload-image-logo" src={upload_logo}></img>
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>  
                )}
                </Dropzone>
                <Button className="scan-button" disableRipple={true}>Scan Document</Button>
            </div>
        )
    }
}
