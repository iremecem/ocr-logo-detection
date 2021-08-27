import React, { Component } from 'react'
import axios from 'axios'

import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Dropdown } from 'primereact/dropdown';

import OcrResultSkeleton from '../../components/OcrResultSkeleton/OcrResultSkeleton'
import { ButtonItems } from './ButtonItems'

import './ScanResultPage.css'

import SaveOcrResultButton from '../../components/SaveOcrResultButton/SaveOcrResultButton.js'

export default class ScanResultPage extends Component {

    constructor(props) {
        super(props)
        console.log(props)

        this.state = {
            file: this.props.location.state.file,
            preview: URL.createObjectURL(this.props.location.state.file),
            result: "",
            downloadLink: "",
            downloadName: "",
            downloadType: "",
        }

        this.items = [{
            label: 'Plain Text (txt)',
            icon: 'pi pi-refresh',
            command: () => {
                this.toast.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Portable Document (pdf)',
            icon: 'pi pi-times',
            command: () => {
                this.toast.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Microsoft Word (docx)',
            icon: 'pi pi-refresh',
            command: () => {
                this.toast.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'OpenOffice (odf)',
            icon: 'pi pi-refresh',
            command: () => {
                this.toast.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        }];
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
            this.setState({ result: response.data})
          })
          .catch(error => {
              console.log(error);
          }).then(() => {
              let data = {"4": "bu company",
                          "3": this.state.result}
              axios.post("https://api.jotform.com/form/212221991729054/submissions?apikey=589e0c84d66ed72d07f81a78e3153916", data)
          })
    }


    createTxtFile = () => {
        const data = new Blob([this.state.result], {type: 'text/plain'})
        URL.revokeObjectURL(this.state.downloadLink)
        this.setState({downloadLink: URL.createObjectURL(data)})
        console.log(this.state.downloadLink)
    }

    createWordxFile = () => {
        const data = new Blob([this.state.result], {type: 'application/msword'})
        URL.revokeObjectURL(this.state.downloadLink)
        this.setState({downloadLink: URL.createObjectURL(data)})
        console.log(this.state.downloadLink)
    }

    createWordFile = () => {
        const data = new Blob([this.state.result], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'})
        URL.revokeObjectURL(this.state.downloadLink)
        this.setState({downloadLink: URL.createObjectURL(data)})
        console.log(this.state.downloadLink)
    }

    

    render() {
        return (
            <div className="result-page-container">
                <div className="result-elements">
                    <div className="image-container">
                        <img className="image"
                            alt="image"
                            src={this.state.preview}
                        />
                    </div>
                    <div className="options-container">
                        <div>
                        <SaveOcrResultButton/>
                        <SaveOcrResultButton/>
                        <SaveOcrResultButton/>
                        </div>
                    </div>
                    <div className="ocr-text-container">
                        {this.state.result ? <div className="display-linebreak">{this.state.result}</div> : <OcrResultSkeleton/>}
                    </div>
                {/* <Button onClick={this.createWordFile}>lele</Button>
                <a download='lele.docx' href={this.state.downloadLink}>link is here</a> */}
                
                </div>
            </div>
        )
    }
}
