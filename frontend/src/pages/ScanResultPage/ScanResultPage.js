import React, { Component } from 'react'
import axios from 'axios'

import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Dropdown } from 'primereact/dropdown';

import OcrResultSkeleton from '../../components/OcrResultSkeleton/OcrResultSkeleton'
import { ButtonItems } from './ButtonItems'

import './ScanResultPage.css'

import SaveOcrResultButton from '../../components/SaveOcrResultButton/SaveOcrResultButton.js'
import LogoResultSkeleton from '../../components/LogoResultSkeleton/LogoResultSkeleton';

export default class ScanResultPage extends Component {

    constructor(props) {
        super(props)
        console.log(props)

        this.state = {
            file: this.props.location.state.file,
            preview: URL.createObjectURL(this.props.location.state.file),
            ocrResult: "",
            downloadLink: "",
            downloadName: "",
            downloadType: "",
            companyName: "",
            logoImage: ""
        }
    }

    componentDidMount() {
        this.getOcrResult();
    }


    getOcrResult = () => {
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        let fd = new FormData();

        fd.append('file', this.state.file)

        axios.post('http://127.0.0.1:8000/ocr/', fd, config)
          .then((response) => {
            console.log(response.data);
            let ocrResult = response.data;
            this.setState({ ocrResult: response.data})
          })
          .catch(error => {
              console.log(error);
          })
          .then(() => {
            axios.post('http://127.0.0.1:8000/logo/', fd, config)
            .then((response) => {
                console.log(response.data);
                this.setState({logoImage: response.data.image, companyName: response.data.company_name});
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => {

                let data = {"3": this.state.companyName,
                            "4": this.state.ocrResult,
                            "5": this.state.logoImage}

                axios.post("https://api.jotform.com/form/212441982728057/submissions?apikey=589e0c84d66ed72d07f81a78e3153916", data)
            })
            .catch((error) => {
                console.log(error)
            })
          })
          
    }


    render() {

        var logoImage = 'data:image/jpeg;base64,' + this.state.logoImage

        return (
            <div className="result-page-container">
                <div className="result-elements">
                    <div className="image-container">
                        {this.state.logoImage ? <img className="image"
                            alt="image"
                            src={logoImage}
                        /> : <img className="image"
                        alt="image"
                        src={this.state.preview}
                    />}
                        
                    </div>
                    <div className="results-column">
                        <div className="logo-result-container">
                            <div className="ocr-header">Company Name</div>
                            <hr className="header-divider"></hr>
                            {this.state.companyName ? <div> {this.state.companyName}</div> : <LogoResultSkeleton/>}
                        </div>
                        <div className="ocr-result-container">
                            <div className="ocr-header">Mail Content</div>
                            <hr className="header-divider"></hr>
                            {this.state.ocrResult ? <div className="ocr-result">{this.state.ocrResult}</div> : <OcrResultSkeleton/>}
                            <div className="save-button"> 
                                <SaveOcrResultButton ocrResult={this.state.ocrResult} fileName={this.state.file.name}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
